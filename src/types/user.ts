export interface BackendUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  active: number; // 0 or 1
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'viewer';
  active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  role: User['role'];
  active?: boolean;
}
