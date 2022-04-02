import React from "react";
import { useState, useEffect, useCallback } from 'react';
import '../App.css';
// import "./styles.css";
import Navigation from "../components/commun/Navigation";

const Formulaire = () => {
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    return (
        <div className="A">
            <h1>Saisir le nom et age de la personne :</h1>
            <input
                placeholder="tapez name" onChange={(e) => {
                    setName(e.target.value);
                }} />

            <input placeholder="tapez age" onChange={(e) => {
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
                    <form action='http://localhost:3030/user' method="post">
                        <label>Name :</label>
                        <input type="text" name="name" value={item.name} />
                        <labe>Age :</labe>
                        <input type="text" age="age" value={item.age} />
                        <input type="submit" value='Envoyer' />
                    </form>
                </div>
            ))}

            <hr />
            < Navigation />
            <hr />

        </div>
    );
}

export default Formulaire;
