import React from "react";
import Hero from './Hero/Hero';
import Plans from './Plans/Plans';
import Programs from './Programs/Programs';
import Reasons from './Reasons/Reasons';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from './Footer/Footer';
import '../App.css'
import Coach from "../Coach/Coach";

const Afterhome = () => {
    return (
        <div className="App">
            <Hero />
            <Programs />
            <Reasons />
            <Coach />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />

        </div>
    )
}

export default Afterhome;