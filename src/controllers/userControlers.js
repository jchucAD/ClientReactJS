import { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
//initialise les variable depuis .env
dotenv.config()

const PORT = process.env.PORTSERVER || 4000
const URISERVER = process.env.URISERVER || "http://localhost"

export function listUsers() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchUsers() {
            const userList = await axios.get(URISERVER + ":" + PORT + "/getUsers")
            //axios retourne le resultat dans DATA
            setUsers(userList.data.users)
            //console.log(userList.data)
            setIsLoading(false)
        }
        fetchUsers()
    }, [])
    return { users, setUsers }
}


export async function createUser(user) {
    console.log('appel createUser:', user)

    //récupère le token depuis le stokage local
    const token = localStorage.getItem("token")

    const newUser = await axios.post(URISERVER + ":" + PORT + "/adduser",
        {
            age: user.age, phone: user.phone, username: user.name,
            email: user.email, password: user.password, address: user.address,
            address2: { full: user.address, voie: "rue", code: "31000" }
        },
        { headers: { authorization: "bearer " + token } }
    )
    return newUser.data.user
}

export async function login(email, password) {
    //console.log('appel login:', email, password)
    try {
        const userConnected = await axios.post(URISERVER + ":" + PORT + "/login", { email, password })
        return userConnected.data
    } catch { return false }

}

export async function displayUser(user) {
    console.log(user);
    alert("Détail display:" + user.username)
}

export async function deleteUser(user) {
    console.log(user.username)
    const email = "admin"
    const password = "$2b$10$bVs8cQDSN/BBf/76gHuTTet2TkyWiBZu/c1vNsA705Ak9tA7BS8sy"
    const userID = user._id

    //récupère le token depuis le stokage local
    const token = localStorage.getItem("token")
    //console.log('token:', token)

    //Delete
    console.log('deleteuser:' + userID)
    const resDel = await axios.delete(URISERVER + ":" + PORT + "/deleteuser/" + userID,
        { headers: { authorization: "bearer " + token } })
    console.log("retour supression: " + resDel.data.message + " Id:" + resDel.data.userId)

    alert("User supprimé " + resDel.data.userId)
}