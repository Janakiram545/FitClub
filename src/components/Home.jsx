import React from "react";
import Hero from './Hero/Hero';
import Plans from './Plans/Plans';
import Programs from './Programs/Programs';
import Reasons from './Reasons/Reasons';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from './Footer/Footer';
import '../App.css'
import Header from "./Header/Header";
import Homepic from "./PicHome/Homepic";

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Homepic />

            {/* <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer /> */}
        </div>
    )
}

export default Home;