import React, { useState } from "react"
import Navigation from "../components/commun/Navigation"

const About = () => {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])
    let index = 0;

    function delElArray(name) {
        // arr.splice(ind, 1); alert('Elément bien supprimé');
        // appel API pour supprimer item 
        // si retour OK200 alors je continue cote front ... sinon ....
        // forcer la mise à jour
        setItems((prevItems) => {
            const filteredItems = prevItems.filter((item) => item !== name)
            //console.log("filteretItems: ", filteredItems)
            return filteredItems
        })
        // setItems(filteredItems)
    }

    return (
        <><h1>About this app</h1>
            <input onChange={(e) => setText(e.target.value)} />

            <button onClick={() => setItems([...items, text])} > Enregistrer </button>
            <ol>
                {items.map((item, index) => <li key={index}> {item + " index :" + index}
                    <button onClick={() => delElArray(item)} > Supprimer </button>
                </li>)}
            </ol>
            Compteur: {items.length}
            <hr />
            < Navigation />
            <hr />

        </>
    )
}
export default About
