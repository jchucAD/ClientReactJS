import React from "react";
import { useState, useEffect, useCallback } from 'react';
import '../App.css';
// import "./styles.css";
import Navigation from "../components/commun/Navigation";

const Inscription = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [adresse, setAdresse] = useState("");

    return (
        <div className="A">
            <h1>Nouvelle inscription : saisir le nom, age et adresse de la personne :</h1>
            <input
                placeholder="tapez name : " onChange={(e) => {
                    setName(e.target.value);
                }} />
            <input placeholder="tapez age :" onChange={(e) => {
                setAge(e.target.value);
            }} />
            <input placeholder="tapez adresse :" onChange={(e) => {
                setAdresse(e.target.value);
            }} />
            <button
                onClick={() => {
                    ;
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

export default Inscription;
