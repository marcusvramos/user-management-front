# 👥 User Management Front

Frontend para gestão de usuários. Permite listar, criar, editar e remover usuários, definindo papel (admin/manager/viewer) e status (ativo/inativo).

## 🚀 Funcionalidades

- 📋 Lista de usuários com ordenação e busca
- ➕ Tela de criação (New) e ✏️ edição (Edit)
- 📨 Campos: nome, email, papel (Select) e status (Switch)
- 🔁 Integração com API via RTK Query (cache, refetch, invalidações)
- 🎨 UI com MUI 6 e tema customizado (tokens, css variables)
- 🧱 Error Boundary (nível de rota)
- 💤 Lazy loading com React.lazy + Suspense
- ✅ Testes com Vitest + Testing Library + MSW

## 🧱 Stack & Ferramentas

- Runtime/build: Vite, TypeScript, pnpm
- Router: React Router v6 (lazy, Suspense, ErrorBoundary)
- Estado/API: Redux Toolkit + RTK Query
- UI: Material UI v6, `@emotion/styled` e `styled()` baseado no THEME (sem estilos inline)
- Tema: tokens em `src/theme` (layout, bordas, opacidade, sombras, radius, palette)
- Qualidade: ESLint 9, Prettier 3, Commitlint, Husky + lint-staged, typecheck (tsc)
- Storybook: catálogo e playground de componentes em isolamento, com variações e estados
- Releases: `release-it` + Conventional Changelog
- Workflows (GitHub Actions):
  - CI: lint, format:check, tests, build e build-storybook para qualquer branch (push/PR)
  - Deploy: build + Pages, publica no GitHub Pages em push na branch `master` (SPA fallback `404.html`)

## 🔧 Scripts úteis

- `pnpm dev` — inicia o servidor de desenvolvimento
- `pnpm build` — gera o bundle de produção
- `pnpm preview` — pré-visualiza o build de produção
- `pnpm typecheck` — valida os tipos TypeScript
- `pnpm lint` / `pnpm lint:fix` — checa/corrige lint
- `pnpm format` / `pnpm format:check` — formata/verifica com Prettier
- `pnpm test` / `pnpm test:watch` / `pnpm test:ci` — testes unitários/integrados
- `pnpm storybook` / `pnpm build-storybook` — Storybook de componentes
- `pnpm release` — cria release (veja também `release:patch|minor|major`)
- `pnpm deploy` — publica no GitHub Pages (branch `gh-pages`)

## 🌐 Demo

- App (GitHub Pages): https://marcusvramos.github.io/user-management-front
- Storybook: https://marcusvramos.github.io/user-management-front/storybook/

## 🔗 API

Esta aplicação consome uma REST API simples que eu também desenvolvi.

- Repositório (API): https://github.com/marcusvramos/user-management-api

Configuração: defina `VITE_API_URL` no `.env` para apontar a uma URL de API diferente.
