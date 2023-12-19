import { get } from 'mongoose';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'inline-block',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    margin: '6px',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  h1: {
    color: '#333',
  },
  h2: {
    color: '#4caf50',
  },
  p: {
    color: '#555',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(1));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  const renderBmiImage = () => {
    if (!bmiResult) {
      return null;
    }

    const bmiCategory = getBmiCategory(parseFloat(bmiResult));

    switch (bmiCategory) {
      case 'Underweight':
        return <img src="Underweight.jpg" height={400} width={350} alt="Underweight" style={styles.img} />;
      case 'Normal Weight':
        return <img src="Normal.jpg" height={400} width={350} alt="Normal Weight" style={styles.img} />;
      case 'Overweight':
        return <img src="overweight.jpg" height={400} width={350} alt="Overweight" style={styles.img} />;
      case 'Obesity':
        return <img src="Obesity.jpg" height={400} width={350} alt="Obesity" style={styles.img} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
       
        <Link to = "/home">
          <button>Go Back</button>
        </Link>
      
      <h1>BMI Calculator</h1>
      
      <div style={styles.form}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button onClick={calculateBMI} style={styles.button}>
          Calculate BMI
        </button>
      </div>
      {bmiResult !== null && (
        <div style={styles.result}>
          <h2>Your BMI: {bmiResult}</h2>
          <p>Category: {getBmiCategory(parseFloat(bmiResult))}</p>
          {renderBmiImage()}
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
