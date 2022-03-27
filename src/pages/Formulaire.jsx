import React from "react";
import { useState, useEffect, useCallback } from 'react';
import '../App.css';
// import "./styles.css";
import Navigation from "../components/commun/Navigation";

const Formulaire = () => {
    //const [persons, setPersons] = useState([]);
    //const [name, setName] = useState("");
    //const [age, setAge] = useState(0);
    const [persons { name, age }, setPersons] = useState("", 0)
    let mesClients = persons;
    // comment passer mesClients à HomePage?

    return (
        <div className="A">
            <h1>Saisir le nom et age de la personne :</h1>
            <input
                placeholder="tapez name"
                onChange={(e) => {
                    setName(e.target.value);
                }} />

            <input placeholder="tapez name" onChange={(e) => {
                setAge(e.target.value);
            }} />
            <button
                onClick={() => {
                    setPersons([...persons, { name, age }]);
                }}
            >
                Enregistrer
            </button>
            {persons.map((item) => (
                <div>
                    <p>Nom : {item.name} et age : {item.age}</p>
                </div>
            ))}

            <hr />
            < Navigation />
            <hr />

        </div>
    );
}

export default Formulaire;
