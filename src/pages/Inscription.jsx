import React from "react"
import { useState, useEffect, useCallback } from 'react'
import '../App.css'
import { signupUser } from "./../controllers/userControlers"

import Navigation from "../components/commun/Navigation"

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="A">
            <h1>Nouvelle inscription : saisir votre ID et mot de passe</h1>
            <input
                placeholder="tapez email : " onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            <input placeholder="tapez password :" onChange={(e) => {
                setPassword(e.target.value);
            }} />

            <button onClick={() => {
                signupUser(email, password)
            }}
            > Valider </button>
            <hr />            < Navigation />            <hr />
        </div>
    )
}

export default Inscription
