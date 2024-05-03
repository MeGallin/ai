import { createLazyFileRoute } from '@tanstack/react-router';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import DashBoardComponent from '../components/DashBoard/DashBoardComponent';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/dashBoard')({
  component: () => (
    <>
      <SignedOut>
        <p>'You are not signed'</p>
        <Link to="/login" activeProps={{ className: 'active' }}>
          Login
        </Link>
      </SignedOut>
      <SignedIn>
        <DashBoardComponent />
      </SignedIn>
    </>
  ),
});
