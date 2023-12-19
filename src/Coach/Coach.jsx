import React from 'react';
import './Coach.css';
// import {CoachData } from '../../data/CoachData';
import {CoachData } from './CoachData';
// import leftArrow from 'leftArrow.png';
// import rightArrow from 'rightArrow.png';
import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';
import {motion} from 'framer-motion'
const Coach = () => {
    const transition ={type:"spring",duration:3}

    const [selected, setSelected] = React.useState(0);
    const tLength = CoachData.length;
  return (
    <div className="Coach">
        <div className="left-t">
            <span>Coach</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}
            >
                {CoachData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'var(--orange)'}}>
                {CoachData[selected].name}
                </span>{" "}

                -{CoachData[selected].status}
            </span>
        
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity:0,x:-100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}
            ></motion.div>
            <motion.div
                initial={{opacity:0,x:100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}
            ></motion.div>
        

            <motion.img
            key={selected}
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}
            transition={transition}
            src={CoachData[selected].image} alt="" />

            <div className="arrows">
                <img 
                onClick={()=>{
                    selected === 0 
                    ? setSelected(tLength-1)
                    : setSelected((prev)=>prev-1);
                }}
                src={leftArrow}
                alt="" />
                <img 
                onClick={()=>{
                    selected === tLength-1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                
                src={rightArrow} 
                alt="" />
            </div> 
        </div>
    </div>
  )
}

export default Coach;