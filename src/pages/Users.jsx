import React, { useState, useEffect } from "react"
import Navigation from "../components/commun/Navigation"
import { listUsers } from "./../controllers/userControlers"

import dotenv from 'dotenv'
//initialise les variable depuis .env
dotenv.config()
const PORT = process.env.PORTSERVER || 4000
const URISERVER = process.env.URISERVER || "http://localhost"

function Users(props) {

    const personsDB = listUsers()

    return (
        <>
            <hr /> < Navigation />  <hr />
            <h2>Affiche la liste des users en base avec les filtres</h2>
            <ol>
                {personsDB.users.map((item) => (
                    <div key={item._id}>
                        < li > Nom : {item.username} et email : {item.email} </li>
                    </div>
                ))
                }
            </ol >

        </>
    )
}

export default Users