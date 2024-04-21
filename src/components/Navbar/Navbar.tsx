import { SignedOut, SignedIn, useClerk } from '@clerk/clerk-react';
import { Link } from '@tanstack/react-router';
import './NavBar.css';

const Navbar = () => {
  const clerk = useClerk();
  console.log(clerk);
  return (
    <nav className="navbar-wrapper">
      <div>
        <Link to="/" activeProps={{ className: 'active' }}>
          Home
        </Link>
      </div>
      <div>
        <SignedIn>
          <Link to="/dashboard" activeProps={{ className: 'active' }}>
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="login" onClick={() => clerk.openSignIn({})}>
            Log-in
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
