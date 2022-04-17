// import userModel from './../modeles/userModel.js'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function listUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchUsers() {
            const userList = await axios.get("http://localhost:4000/getUsers")
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

    const newUser = await axios.post("http://localhost:4000/adduser",
        {
            age: user.age, phone: user.phone, username: user.name,
            email: user.email, password: user.password, address: user.address
        }
    )
    return newUser.data.user
}

export function displayUser(user) {
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
    const token = await axios.post("http://localhost:4000/login", { email: email, password: password })
    console.log("token " + token.data.token)

    //Delete
    const value = "brearer " + token.data.token

    console.log('deleteuser:' + userID)
    const resDel = await axios.delete("http://localhost:4000/deleteuser/" + userID, { headers: { "Authorization": value } })
    console.log("retour supression: " + resDel.data.message + " Id:" + resDel.data.userId)
    alert("User supprimé " + resDel.data.userId)

}