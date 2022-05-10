import React from "react"
import { useState, useEffect, useCallback } from 'react'
import '../App.css'
import { login } from "./../controllers/userControlers"

import Navigation from "../components/commun/Navigation"

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="A">
            <h1>Nouvelle inscription ou login : saisir votre email et mot de passe</h1>
            <input
                placeholder="tapez email : " onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            <input placeholder="tapez password :" onChange={(e) => {
                setPassword(e.target.value);
            }} />

            <button onClick={async () => {
                //signupUser(email, password)
                const connectedUser = await login(email, password)
                if (!connectedUser) alert('User inconnu!')
                else {
                    alert('User identifié!', connectedUser.name)
                    //console.log('user connecté', connectedUser)
                    //sauvegarde le token en local
                    localStorage.setItem("token", connectedUser.token)
                }
            }}
            > Valider </button>
            <hr />            < Navigation />            <hr />
        </div>
    )
}

export default Inscription
