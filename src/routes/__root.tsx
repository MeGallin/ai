import { createRootRoute, Outlet } from '@tanstack/react-router';

import Header from '../common/Header';
import Footer from '../common/Footer';
import '../App.css';
import { ClerkProvider } from '@clerk/clerk-react';
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export const Route = createRootRoute({
  component: () => (
    <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ClerkProvider>      
    </>
  ),
});