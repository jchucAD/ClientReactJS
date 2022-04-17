import React from "react"
import { useState, useEffect, useCallback } from 'react'
import '../App.css'
// import "./styles.css";
import Navigation from "../components/commun/Navigation"
import { listUsers, deleteUser, addUser, createUser, displayUser } from "./../controllers/userControlers"

const Formulaire = () => {
    const [persons, setPersons] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const personsDB = listUsers()

    //console.log(personsDB)

    return (
        <div className="A">
            <hr /> < Navigation />  <hr />
            <h1>Ajout en base, saisir les champs de la personne :</h1>
            <input placeholder="tapez name" onChange={(e) => {
                setName(e.target.value)
            }} />
            <input placeholder="tapez age" onChange={(e) => {
                setAge(e.target.value)
            }} />
            <input placeholder="tapez email" onChange={(e) => {
                setEmail(e.target.value)
            }} /><input placeholder="tapez password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <input placeholder="tapez l'adresse" onChange={(e) => {
                setAddress(e.target.value)
            }} />
            <input placeholder="tapez le téléphone" onChange={(e) => {
                setPhone(e.target.value)
            }} />
            <button
                onClick={() => {
                    setPersons([...persons, { name, age, email, password, address, phone }]);
                }}
            > Vérifier </button>
            <div>
                {persons.map((item) => (
                    <div>
                        <p>Nom : {item.name} et age : {item.age} </p>
                        <button onClick={() => createUser(item)}> Enregistrer en base </button>
                    </div>
                ))}
            </div>
            <h2>Affiche la liste des users en base :</h2>
            <ol>
                {personsDB.users.map((item) => (
                    <div>
                        <li>Nom : {item.username} et email : {item.email}
                            <button onClick={() => deleteUser(item)}> Supprimer en base </button> </li>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default Formulaire
