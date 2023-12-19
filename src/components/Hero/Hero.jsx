import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import{motion, wrapHandler} from'framer-motion'
import NumberCounter from 'number-counter'
import { useNavigate } from 'react-router-dom'
import Caloriesapp from '../Calories/Calories'
import Homepic from '../PicHome/Homepic'


const Hero = () => {
    const navigate=useNavigate();
    const transition={type:'spring',duration:3};
    const handleclick=()=>{navigate('/login')}
    const handlelearn=()=>{navigate('/calories')}
    const handlebmi=()=>{navigate('/bmi')}
    // const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="hero" id ='home'>
        <div className='blur  hero-blur'></div>
        <div className="left-h">
            
            <Header/>

            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                    initial={{left:'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}
                
                ></motion.div>
                <span>the best fitness club in town</span>
            </div>


            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>
            </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                        
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
                
            {/* hero  buttons */}
            <div className="hero-buttons">
                <button className="btn btn" onClick={handlelearn}>Calory Check</button>
                <button className="btn btn" onClick={handlebmi}>BMI</button>
            
            </div>
        </div>       
    <div className="right-h">
        <button className='btn' onClick={handleclick}>Login</button>


        <motion.div
        initial={{right:"-1rem"}}
        transition={transition}
        whileInView={{right:"4rem"}}
        className="heart-rate">
            <img src={Heart} alt=""/>
            <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

        {/* hero images */} 
        <img src ={hero_image} alt="" className='hero-image'/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        
        src ={hero_image_back} alt="" className='hero-image-back'/> 
            
        {/* hero calories */}  
        <motion.div 
            initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}    
            className="calories"
        >
            <img src={Calories} alt=""/>
            <div>
            <span>Calories</span>
            <span>220 kcal</span>
            </div>
        </motion.div>
            

    </div>
</div>
  )
}

export default Hero