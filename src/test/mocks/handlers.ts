import { http, HttpResponse } from 'msw';
import type { BackendUser } from '@/types/user';

const API_BASE_URL = 'https://users-backend-api.fly.dev/api';

export const mockUsers: BackendUser[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    active: 1,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'manager',
    active: 1,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'viewer',
    active: 0,
  },
];

export const handlers = [
  http.get(`${API_BASE_URL}/users`, () => {
    return HttpResponse.json(mockUsers);
  }),

  http.get(`${API_BASE_URL}/users/:id`, ({ params }) => {
    const { id } = params;
    const user = mockUsers.find((u) => u.id === Number(id));
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(user);
  }),

  http.post(`${API_BASE_URL}/users`, async ({ request }) => {
    const body = (await request.json()) as Omit<BackendUser, 'id'>;
    const newUser: BackendUser = {
      id: mockUsers.length + 1,
      ...body,
      active: body.active ?? 1,
    };
    return HttpResponse.json(newUser, { status: 201 });
  }),

  http.put(`${API_BASE_URL}/users/:id`, async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<BackendUser>;
    const user = mockUsers.find((u) => u.id === Number(id));

    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }

    const updatedUser = { ...user, ...updates };
    return HttpResponse.json(updatedUser);
  }),

  http.delete(`${API_BASE_URL}/users/:id`, ({ params }) => {
    const { id } = params;
    const userIndex = mockUsers.findIndex((u) => u.id === Number(id));

    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    return new HttpResponse(null, { status: 204 });
  }),
];
