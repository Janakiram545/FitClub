import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from "react-router-dom";


const Programs = () => {
  return (
    <div className="programs" id="Programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* programs */}
        <div className='program-categories'>
            {programsData.map((program) => (
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <Link to = {program.link}>
                        <span>Join Now</span></Link>
                    </div>
                </div>
            ))}
        </div>

    </div>

  ); 
};

export default Programs;