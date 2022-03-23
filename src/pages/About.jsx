import React, { Component, useState } from "react";
import Navigation from "../components/commun/Navigation";

const About = () => {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])
    var index = 0;

    function delElArray(arr, ind) {
        arr.splice(index, 1); alert('Elèmet bien supprimé')
    }

    /* console.log("isText", text)
    console.log("Items", items)
    */

    return (
        <><h1>About this app</h1>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={() => setItems([...items, text])} > Enregistrer </button>
            <ol>
                {items.map((item, index) => <li key={item}> {item + " index :" + index}
                    <button onClick={() => delElArray(items, index)} > Supprimer </button>
                </li>)}
            </ol>
            Compteur: {items.length}
            <hr />
            < Navigation />
            <hr />

            <h1>About:  rajout ligne pour GIT tag V0</h1>
            <h1>About:  rajout ligne pour GIT tag V1</h1>
        </>
    )
}
export default About;
