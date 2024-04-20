
import { Link } from '@tanstack/react-router';
const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to="/" activeProps={{ className: 'active' }}>
              Home
            </Link>{' '}
            <Link to="/login" activeProps={{ className: 'active' }}>
              Login
            </Link>
        </div>
    </nav>
  )
}

export default Navbar