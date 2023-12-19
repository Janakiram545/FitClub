// 
// Benefits.jsx

import React, { useState } from "react";
import "./Benefits.css"; 
import { Link } from "react-router-dom";

const Benefits = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  
  // Define plan details
  const planDetails = {
    basic: ["Cost: ₹1000 per month","Duration per week: 5 hours",
            "Free Consultation to Coaches: Get expert advice and guidance without any additional cost.",
            "Access to The Community: Join a supportive community of fitness enthusiasts, share your journey, and get motivated",
            "See more benefits:",
            "Flexible Workout Schedules: Tailor your workout timings to fit your busy lifestyle.",
            "Nutritional Guidance: Receive basic nutritional tips to complement your fitness routine.",
            "Exclusive Events Access: Attend special events hosted by the fitness community.",
            "Join now and kickstart your fitness journey with the Basic Plan!"],

    premium: ["Cost: ₹2000 per month","Duration per week: 5 hours",
              "Free Consultation of Coaches: Personalized coaching sessions to help you reach your fitness goals.",
              "Access to Minibar: Enjoy refreshments at our exclusive minibar after your workout sessions.",
              "See more benefits:",
              "Advanced Workout Plans: Receive customized workout plans for faster and effective results.",
              "Monthly Progress Tracking: Keep track of your progress with monthly assessments.",
              "Exclusive Classes Access: Participate in premium fitness classes conducted by renowned instructors.",
              "Join now for an elevated fitness experience with the Premium Plan!"],
          pro: ["Cost: ₹3000 per month","Duration per week: 8 hours",
                "Consultation of Private Coach: Receive one-on-one coaching from a dedicated private coach for personalized fitness plans.",
                "Free Fitness Merchandises: Exclusive fitness merchandise delivered to your doorstep for free.",
                "See more benefits:", 
                "Unlimited Access to All Facilities: Enjoy unrestricted access to all gym facilities and equipment.",
                "Priority Booking for Classes: Secure your spot in high-demand fitness classes before others.",
                "24/7 Customer Support: Get round-the-clock assistance for any fitness-related queries.",
                "Join now and experience the ultimate fitness journey with the Pro Plan!"],
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <div className="benefits-container">
      
       
        <Link to = "/home">
          <button>Go Back</button>
        </Link>
      <h2>Choose a Plan</h2>
      <select
        id="plan"
        value={selectedPlan}
        onChange={handlePlanChange}
        className="plan-dropdown"
      >
        <option value="" disabled>Select a plan</option>
        <option value="basic">Basic Plan</option>
        <option value="premium">Premium Plan</option>
        <option value="pro">Pro Plan</option>
      </select>

      {selectedPlan && (
        <div className="selected-plan">
          <p>You have selected the {selectedPlan}.</p>
          <h3>Plan Details:</h3>
          <ul>
            {planDetails[selectedPlan].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Benefits;
