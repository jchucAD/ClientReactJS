import React from "react";
import { useState } from 'react';
import '../App.css';
import Todos from '../Todos';
import Navigation from "../components/commun/Navigation";

const HomePage = () => {
    const [isDisplayTodos, setIsDisplayTodos] = useState(false)
    console.log("isDisplayTodos", isDisplayTodos)
    const title = "Todos"

    return (
        <div>
            <h1 id='grosTitre'> Mon premier programme</h1>
            <p id='a'> Essai avec un bouton</p>

            <hr />
            <button onClick={() => {
                // on fait appel a un services backend on envoie les inputs pour ce service
                setIsDisplayTodos(!isDisplayTodos)
            }}>
                {isDisplayTodos ? 'display todos' : 'hide todos'}</button>
            {isDisplayTodos && <Todos title={title} lenght={5} />}
            <hr />
            <Todos title={"title1"} lenght={10} isDisplayTodos={isDisplayTodos} />
            <hr />
            < Navigation />
        </div>



    )
}

export default HomePage