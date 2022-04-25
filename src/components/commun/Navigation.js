import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul>
                <p>Menu </p>
                <NavLink to='/formulaire'> <li>Formulaire Clients</li> </NavLink>
                <NavLink to='/inscription'> <li>Inscription ou login</li> </NavLink>
                <NavLink to='/about'> <li>Vers About</li> </NavLink>
                <NavLink to='/users'> <li>Liste des Users en base</li> </NavLink>
                <NavLink to='/'> <li>Vers HomePage </li></NavLink>
            </ul>
        </>
    )
}
export default Navigation