import React from 'react';

function Card(props){
    return (
        <div className="card-container">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <h2>{props.type}</h2>
        </div>
    )
}

export default Card;