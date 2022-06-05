import React from "react";
import "../styles/Card.css";

function Card(props) {

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-type">{props.type}</p>
            </div>
            <div className="card-body">
                <p className="card-description">{props.description}</p>
                <div className="card-details">
                    <p className="card-units">Units : {props.units}</p>
                    <p className="card-amount">Price : {props.price}</p>
                </div>
                <button className="card-button">Buy</button>
            </div>
        </div>
    );
}

export default Card;