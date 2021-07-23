import { NavLink } from "react-router-dom"
import classes from './Navbar.module.css'
import Clock from './Clock'

const Navbar = () => {

   
    return (
        <header className={classes.header}>
            <nav role="navigation">
                <ul>
                    <li>
                        <NavLink to='/'>
                            Welcome page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-policy'>
                            Privacy policy
                        </NavLink>
                    </li>
                    <li>
                        <Clock />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
