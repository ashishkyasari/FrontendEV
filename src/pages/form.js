import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import bgImg from '../images/Carousel2.jpg'
import { useForm } from 'react-hook-form';
import '../styles/form.css'
import Layout from '../components/Layout';
import {useNavigate} from "react-router-dom";
// import './App.css';


export default function Form() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [user, setUser] = useState({
        battery: "",
        Slots: "",
        hr: "",
        min: "",
    })

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, type } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (data) => {
        console.log(data);
    };

    const send = () =>{
        console.log(user);
        navigate("/buy-units",{replace: true, state: {user: user}})
    }

    return (
        <Layout>
            {
                console.log(user)
            }
            <div className='App'>
                <section>
                    <div className="register">
                        <div className="col-1">
                            <h2>Book a slot</h2>

                            <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                                <input type="number" {...register("Battery percentage")} name='battery' value={user.battery} placeholder="Battery percentage" onChange={handleChange} />
                                <input type="number" {...register("number of slots")} name='Slots' value={user.Slots} placeholder="Number of slots" onChange={handleChange} />
                                <input type="number" {...register("Hr")} name='hr' value={user.hr} placeholder="Hr" onChange={handleChange} />
                                <input type="number" {...register("Min")} name='min' value={user.min} placeholder='Min' onChange={handleChange} />
                                <button className="btn" onClick={send}>Done</button>
                            </form>
                        </div>
                        <div className="col-2">
                            <img src={bgImg} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}