import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/commun/Navigation";
import emoji from "node-emoji"

function Users(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchUsers() {
            const userList = await axios.get("https://api.github.com/users");
            //const userList = await axios.get("localhost:3030/json");
            setUsers(userList.data);
            console.log(userList.data);
            setIsLoading(false);
        }
        fetchUsers();
    }, []);

    function displayUser(userDisplayed) {
        console.log(userDisplayed);
        alert("Détail :", userDisplayed)
    }

    if (isLoading) return <p>loading........</p>;

    return (
        <div>
            <hr />
            < Navigation />
            <hr />
            <h3>{emoji.get('coffee')}Liste des users:</h3>
            <div>
                <ol>
                    {users.map((user) => {
                        return (
                            <div>
                                <li key={user.id}> Login : {user.login} et URL {user.url}
                                    <button onClick={() => displayUser(user)}>see profil </button>
                                </li>
                            </div>
                        );
                    })}
                </ol>
            </div >
        </div >
    );
}

export default Users;