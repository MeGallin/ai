
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { routeTree } from './routeTree.gen.ts';
import { ClerkProvider } from '@clerk/clerk-react'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface home {
    router: typeof router;
  }
  interface login {
    router: typeof router;
  }
}

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
      </ClerkProvider>
    
    </StrictMode>,
  );
}

