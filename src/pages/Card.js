import React,{useState} from "react";
import "../styles/Card.css";
import axios from "axios";

function Card(props) {

    const [data, setUser] = useState({
        startTime: "",
        Slots: parseInt("0", 10),
        name: ""
    })

    const buy = async () =>{
        console.log(props.title+" "+props.Slots+" "+props.time);
        data.startTime = props.time
        data.name = props.title
        data.Slots = parseInt(props.Slots)
        try{
            const resp = axios.post('http://localhost:5001/book',data);
            alert(`${resp.message}`);
        }catch(e){
            console.log(e);
            alert("Error: "+e);
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-type">{props.type}</p>
            </div>
            <div className="card-body">
                <p className="card-description">{props.description}</p>
                <div className="card-details">
                    <p className="card-units">Location : {props.units}</p>
                    <p className="card-amount">Price : {props.price}</p>
                </div>
                <button className="card-button" onClick={buy}>Buy</button>
            </div>
        </div>
    );
}

export default Card;