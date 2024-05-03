import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link } from '@tanstack/react-router';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-wrapper" aria-label="Main navigation">
      <>
        <Link to="/" activeProps={{ className: 'active' }}>
          Home
        </Link>
      </>
      <SignedOut>
        <>
          <Link to="/login" activeProps={{ className: 'active' }}>
            Login
          </Link>
        </>
      </SignedOut>
      <SignedIn>
        <Link to="/dashboard" activeProps={{ className: 'active' }}>
          Dashboard
        </Link>
      </SignedIn>
    </nav>
  );
};

export default NavBar;
