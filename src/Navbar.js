import { NavLink } from "react-router-dom";
import imgUserlogo from './img/user-logo.png';


const Navbar = () => {
    return (
        <div className="header">
            { <img src={imgUserlogo} alt="users logo" /> }
            <ul>
                <li> <NavLink to='/'>Home</NavLink></li>
                <li> <NavLink to='/about'>About Us</NavLink></li>
                <li> <NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;