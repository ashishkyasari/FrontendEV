import React,{useState, useEffect} from "react";
import Layout from "../components/Layout";
import Unitsdata from "../data/Unitsdata";
import Card from "./Card";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Layout1 from "../components/Layout1";

function BuyUnits(props) {

    const [data, setData] = useState([]);

    const location = useLocation();
    const { user } = location.state;
    console.log(user);

    
    const time = user.hr.toString()+":"+user.min.toString();
    console.log(time);


    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5001/availability', {
              params: {
                startTime: time,
                Slots: user.Slots
              }
            });
            setData(response.data);
          } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Layout1>
            {
                console.log(data)
            }
            <section id="BuyUnits">
                {data ? data.map((element, key) => <Card key={key} id={element._id} title={element.name} Slots={user.Slots} time={time}  units={element.location} price={element.price}/>): alert("No Projects")}
            </section>
        </Layout1>
    );
}

export default BuyUnits;