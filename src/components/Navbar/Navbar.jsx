import { NavLink } from "react-router-dom"
import './Navbvar.css'


const Navbar = () => {
  return (
    <header>
        <nav className="navbar container">
            <NavLink 
                className='nav-logo'
                to='/'
            >
                <h2>Cine<span>Fun</span></h2>
            </NavLink>
            <ul className="nav-items">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <NavLink
                            to={item.path}
                            exact="true"
                            className='nav-link'
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

const navItems = [
    // { path: "/", label: "Home" },
    { path: "/movies", label: "Movies" },
    { path: "/tv-shows", label: "Tv Shows" },
    // { path: "/anime", label: "Anime" },
];
