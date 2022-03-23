import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
                <p>Menu </p>
                <NavLink to='/about'> <li>Vers About</li> </NavLink>
                <NavLink to='/'> <li>Vers HomePage </li></NavLink>
            </ul>
        </div>
    )
}
export default Navigation