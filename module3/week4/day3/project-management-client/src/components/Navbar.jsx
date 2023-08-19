import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/projects">
            <button>Projects</button>
        </Link>
    </nav>
)

export default Navbar;