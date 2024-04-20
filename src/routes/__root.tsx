import { createRootRoute, Outlet } from '@tanstack/react-router';

import Header from '../common/Header';
import Footer from '../common/Footer';
import '../App.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </>
  ),
});