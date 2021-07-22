import { NavLink } from "react-router-dom"
import  classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <header className={classes.header}>
            <nav role="navigation">
                <ul>
                    <li>
                        <NavLink to='/welcome'>
                            Welcome page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-policy'>
                            Privacy policy
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
