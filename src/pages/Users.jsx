import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/commun/Navigation";
import emoji from "node-emoji"
import { listUsers, deleteUser, addUser, createUser, displayUser } from "./../controllers/userControlers"


function Users(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchUsers() {
            const userList = await axios.get("http://localhost:4000/getUsers")
            //axios retourne le resultat dans DATA
            setUsers(userList.data.users)
            //console.log(userList.data)
            setIsLoading(false);
        }
        fetchUsers();
    }, []);

    if (isLoading) return <p>Chargement de la liste des users......</p>;

    return (

        < div >
            {listUsers()}
            <hr /> < Navigation /> <hr /> <h3>{emoji.get('coffee')}Liste des users:</h3>
            <div>
                {users.map((user) =>
                    <div>
                        <li key={user._id} > Nom {user.username} et email {user.email}
                            <button onClick={() => displayUser(user)}> see profil </button>
                            <button onClick={() => deleteUser(user)}> delete profil </button>
                        </li >
                    </div>
                )}
            </div>
        </div >
    )
}

export default Users