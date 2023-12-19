import React from 'react'
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { Link } from "react-router-dom";
import './Plans.css'
const Plans = () => {
  return (
    <div className="plans-container"> 
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap:'2rem'}}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>


      {/*plans cards*/}
      <div className="plans">
        {plansData.map((plan,i)=>(
          <div className='plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>Rs.{plan.price}</span>


            <div className="features">
              {plan.features.map((feature,i)=>(
                <div className="feature">
                  <img src={whiteTick} alt=""/>
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <Link to="/Benefits">
                <span>See more benefits -></span>
              </Link>
            </div>
            <div className="plan-btn">
            <Link to="/Payment">
                <button className="btn">Join now</button>
            </Link>
            </div>

           </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;