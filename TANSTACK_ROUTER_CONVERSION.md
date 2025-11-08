# TanStack Router Conversion Guide

## Overview
Your Next.js App Router codebase has been converted to use TanStack Router with Vite. This provides better type safety, performance, and developer experience for client-side routing.

## Key Changes

### 1. Project Structure
```
src/
├── main.tsx                 # App entry point
├── globals.css             # Global styles
├── routeTree.gen.ts        # Auto-generated route tree
├── routes/                 # Route definitions
│   ├── __root.tsx          # Root layout
│   ├── _authenticated.tsx  # Protected routes layout
│   ├── _auth.tsx          # Auth pages layout
│   ├── _authenticated/
│   │   ├── index.tsx      # Home page
│   │   └── stocks/
│   │       └── $symbol.tsx # Stock details
│   └── _auth/
│       ├── sign-in.tsx    # Sign in page
│       └── sign-up.tsx    # Sign up page
├── components/            # UI components
├── lib/                  # Business logic
├── hooks/               # Custom hooks
└── types/              # Type definitions
```

### 2. Route Structure
- `__root.tsx` - Root layout with Outlet and global providers
- `_authenticated.tsx` - Layout for protected routes with auth guard
- `_auth.tsx` - Layout for authentication pages
- Route files use TanStack Router's file-based routing conventions

### 3. Navigation Changes
- Replaced Next.js `Link` with custom `Link` component using TanStack Router
- Updated `useRouter` from Next.js to TanStack Router's `useRouter`
- Changed `usePathname` to `useLocation` from TanStack Router

### 4. Configuration Files
- `vite.config.ts` - Vite configuration with TanStack Router plugin
- `package-tanstack-updated.json` - Updated dependencies
- `tsconfig-tanstack.json` - TypeScript configuration for Vite
- `tailwind.config.ts` - Tailwind configuration for Vite structure

## Migration Steps

### 1. Install Dependencies
```bash
# Remove Next.js dependencies and install TanStack Router + Vite
npm install @tanstack/react-router @tanstack/router-devtools @tanstack/router-vite-plugin
npm install vite @vitejs/plugin-react
npm uninstall next
```

### 2. Update package.json
Replace your current package.json with `package-tanstack-updated.json`

### 3. Update TypeScript Config
Replace tsconfig.json with `tsconfig-tanstack.json`

### 4. File Structure Migration
- Move all source files to `src/` directory
- Update import paths to use `@/` alias pointing to `src/`
- Remove 'use client' directives (not needed in Vite)

### 5. Route Migration
- Convert Next.js pages to TanStack Router route files
- Update navigation components to use TanStack Router hooks
- Implement route guards using `beforeLoad` in route definitions

## Key Features

### Type-Safe Routing
TanStack Router provides full TypeScript support for routes, params, and search params.

### Route Guards
Authentication is handled in `_authenticated.tsx` using `beforeLoad` hook.

### Layouts
Nested layouts using route groups (`_authenticated`, `_auth`).

### Developer Experience
- Hot module replacement with Vite
- Route devtools for debugging
- Auto-generated route tree

## Running the Application

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## Notes
- The backend API routes remain unchanged (database, auth, etc.)
- All existing components and business logic work without changes
- TradingView widgets and external integrations remain functional
- Authentication flow using Better Auth is preserved