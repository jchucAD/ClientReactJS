import React from 'react';
// props un object dedant ta tous les informations envoyées de composant parent App
// vers un composant fils 
function Todos(props) {
    console.log('props', props)
    return <div className='d-flex'>
        <p className='a' > title : {props.title} et length : {props.lenght}  </p>
    </div>
}

export default Todos
