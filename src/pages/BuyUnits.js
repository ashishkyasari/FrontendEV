import React from "react";
import Layout from "../components/Layout";
import Unitsdata from "../data/Unitsdata";
import Card from "./Card";

function BuyUnits() {
    return (
        <Layout>
            <section id="BuyUnits">
                {Unitsdata ? Unitsdata.map((element, key) => <Card key={key} id={element._id} title={element.title} type={element.type} description={element.description} units={element.units} price={element.price}/>): alert("No Projects")}
            </section>
        </Layout>
    );
}

export default BuyUnits;