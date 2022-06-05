import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Carouselimages from "../data/Carouselimages";
import video from "../videos/video.mp4";
import "../styles/Home.css";

const len = Carouselimages.length - 1;

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <Layout>
            <div id="home">
                <section id="carousel-container">
                    <div>
                        {Carouselimages.map((slide, index) => (
                            <div
                                key={index}
                                className={index === activeIndex ? "slides active" : "inactive"}
                            >
                                <img className="slide-image" src={slide.urls} alt="" />
                                <h2 className="slide-title">{slide.title}</h2>
                                <h3 className="slide-text">{slide.description}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="arrows">
                        <span className="prev" onClick={() =>
                            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}>
                            &#10094;
                        </span>
                        <span className="next" onClick={() =>
                            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}>
                            &#10095;
                        </span>
                    </div>

                    <div className="all-dots">
                        {Carouselimages.map((slide, index) => (
                            <span
                                key={index}
                                id={index}
                                className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                                onClick={() => setActiveIndex(index)}
                            ></span>
                        ))}
                    </div>
                </section>

                <section id="steps-container">
                    <h1 id="steps-heading">How to use our service</h1>

                    <div className="step">
                        <p className="step-heading">
                            1.Locate a chargeit station.
                        </p>
                        <p className="step-description">
                            Follow the nearest charging station that's been displayed in the Locate us page.
                        </p>
                    </div>

                    <div className="step">
                        <p className="step-heading">
                            2.Buy units
                        </p>
                        <p className="step-description">
                            After reaching our station park your ev near to a charging box and your and your charging socket facing
                            the charging box.
                            Buy some units from our website for buying units click thne buy units button and choose from the packs
                            or by custom units.
                        </p>
                    </div>

                    <div className="step">
                        <p className="step-heading">
                            3.Scan
                        </p>
                        <p className="step-description">
                            Scan the barcode on the charging box with the scan button provided on the website.If you have suficient
                            units you would get a option of open the box.
                            When you click open box button the box would automatically open the door .
                        </p>
                    </div>

                    <div className="step">
                        <p className="step-heading">
                            4.Plugin
                        </p>
                        <p className="step-description">
                            Once the door is open you can take the charging cable and plug it in your ev charging socket.
                        </p>

                    </div>

                    <div className="step">
                        <p className="step-heading">
                            5.Close door
                        </p>
                        <p className="step-description">
                            Once you have the refill of energy in your ev you just need to select the close door option on your
                            screen and make sure that the cable is kept as it was when you opened the door and see if the door is
                            locked.
                        </p>
                    </div>

                    <video id="steps-video" controls >
                        <source src={video} type="video/mp4" />
                    </video>
                </section>
            </div>
        </Layout>
    );
}

export default Home;