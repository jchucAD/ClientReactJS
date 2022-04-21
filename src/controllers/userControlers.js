import { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
//initialise les variable depuis .env
dotenv.config()

const PORT = process.env.PORTSERVER || 4000
const URISERVER = process.env.URISERVER || "http://localhost"

export function listUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchUsers() {
            const userList = await axios.get(URISERVER + ":" + PORT + "/getUsers")
            //axios retourne le resultat dans DATA
            setUsers(userList.data.users)
            //console.log(userList.data)
            setIsLoading(false)
        }
        fetchUsers()
    })
    return { users }
}


export async function createUser(user) {
    console.log('appel createUser:', user)

    const newUser = await axios.post(URISERVER + ":" + PORT + "/adduser",
        {
            age: user.age, phone: user.phone, username: user.name,
            email: user.email, password: user.password, address: user.address
        }
    )
    return newUser.data.user
}

export async function displayUser(user) {
    console.log(user);
    alert("Détail display:" + user.username)
}

export async function deleteUser(user) {
    console.log(user.username)
    const email = "lionel@gmail.Com"
    const password = "azert"
    const userID = user._id

    //login
    console.log('login:' + email)
    const token = await axios.post(URISERVER + ":" + PORT + "/login",
        { email: email, password: password })
    console.log("token " + token.data.token)

    //Delete
    const value = "brearer " + token.data.token

    console.log('deleteuser:' + userID)
    const resDel = await axios.delete(URISERVER + ":" + PORT + "/deleteuser/" + userID, { headers: { "Authorization": value } })
    console.log("retour supression: " + resDel.data.message + " Id:" + resDel.data.userId)
    alert("User supprimé " + resDel.data.userId)

}