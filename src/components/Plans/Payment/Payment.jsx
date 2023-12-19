import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [plan, setPlan] = useState("");

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically call a payment processing API to process the payment.
    // For the purpose of this example, we'll just simulate a successful payment.

    alert(`Payment successful! You have subscribed to the ${plan} plan.`);
  };

  const getImageSource = () => {
    switch (plan) {
      case "basic":
        return "basic.jpg";
      case "premium":
        return "Premium.jpg";
      case "pro":
        return "Pro.jpg";
      default:
        return "basic.jpg";
    }
  };

  return (
    <div className="dropdown">
      <form onSubmit={handleSubmit}>
        <label htmlFor="plan">Choose a plan:</label>
        <select id="plan" value={plan} onChange={handlePlanChange}>
          <option value="basic">Basic</option>
          <option value="premium">Premium </option>
          <option value="pro">Pro </option>
        </select>

        <input type="submit" value="Pay" />
      </form>
      <img src={getImageSource()} height={400} width={400} alt={plan} />
    </div>

  );
};

export default Payment;
