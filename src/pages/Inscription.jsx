import React from "react";
import { useState, useEffect, useCallback } from 'react';
import '../App.css';

import Navigation from "../components/commun/Navigation";

const Inscription = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [adresse, setAdresse] = useState("");
    const [persons, setPersons] = useState([])

    return (
        <div className="A">
            <h1>Nouvelle inscription (en mémoire) : saisir votre ID et mot de passe</h1>
            <input
                placeholder="tapez name : " onChange={(e) => {
                    setName(e.target.value);
                }} />
            <input placeholder="tapez password :" onChange={(e) => {
                setAge(e.target.value);
            }} />

            <button
                onClick={() => {
                    // xxxxxxx;
                }}
            >
                Valider </button>


            <hr />            < Navigation />            <hr />
        </div>
    );
}

export default Inscription
