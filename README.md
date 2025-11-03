# 👥 User Management Front

Frontend para gestão de usuários. Permite listar, criar, editar e remover usuários, definindo papel (admin/manager/viewer) e status (ativo/inativo).

## 🚀 Funcionalidades

- 📋 Lista de usuários com ordenação e filtros
- ➕ Tela de criação (New) e ✏️ edição (Edit)
- 📨 Campos: nome, email, papel (Select) e status (switch)
- 🔁 Integração com API via RTK Query (cache, refetch, invalidações)
- 🎨 UI com MUI e tema customizado
- ✅ Testes de UI com Vitest + Testing Library

## 🧩 Como rodar

- `pnpm dev` — inicia o servidor de desenvolvimento
- `pnpm build` — gera o bundle de produção
- `pnpm preview` — pré-visualiza o build de produção

## 🛠️ Qualidade & utilitários

- `pnpm typecheck` — valida os tipos TypeScript
- `pnpm lint` / `pnpm lint:fix` — checa/corrige lint
- `pnpm format` / `pnpm format:check` — formata/verifica com Prettier
- `pnpm test` / `pnpm test:watch` / `pnpm test:ci` — testes unitários/integrados
- `pnpm storybook` / `pnpm build-storybook` — Storybook de componentes
- `pnpm deploy` — publica no GitHub Pages (branch `gh-pages`)

## 🌐 Demo

GitHub Pages: https://marcusvramos.github.io/user-management-front

## 🔗 API

Esta aplicação consome a API que nós também desenvolvemos.

- Repositório (API): https://github.com/marcusvramos/user-management-api

Configure `VITE_API_URL` no `.env` para apontar para outra URL quando precisar.
