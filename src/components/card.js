import React from 'react';

function Card(props){
    return (
        <div className="card-container">
            <h2>{props.name}</h2>
            <h3>{props.num}</h3>
            <img src={props.img} alt={props.name} />
            <button>DETALLE</button>
        </div>
    )
}

export default Card;