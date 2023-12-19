import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  select: {
    margin: '6px',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
};

const ActivityForm = ({ onCalculate }) => {
  const [activity, setActivity] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [duration, setDuration] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCalculate = () => {
    const METValues = {
      option1: 5,   // MET value for running
      option2: 8,   // MET value for cycling
      option3: 7,   // MET value for cardio
      option4: 3    // MET value for health use
    };

    const MET = METValues[selectedOption] || 1; 
    const calories = MET * weight * parseFloat(duration) / 60;

    onCalculate(calories.toFixed(2));
    const data = {
      activity,
      weight,
      selectedOption,
      duration,
      calories
    };

    axios.post("http://localhost:3001/Calories",{data})
      .then((result) => {
        console.log(result);
        // Handle success, if needed
      })
      .catch((err) => {
        console.log(err);
        // Handle error, if needed
      });  
};

  return (
    <div style={styles.form}>
      <label htmlFor="options">Select an option:</label>
      <select id="options" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="option1">Cycling</option>
        <option value="option2">Running</option>
        <option value="option3">Cardio</option>
        <option value="option4">Weightlifting</option>
      </select>
      <br />
      <label>
        Weight (kg):
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />

      <label>
        Duration (minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <button onClick={handleCalculate} style={styles.button}>
        Calculate Calories
      </button>
    </div>
  );
};

const ResultDisplay = ({ calories }) => {
  return (
    <div style={styles.result}>
      <h2>Calories Burned:</h2>
      <p>{calories} calories</p>
    </div>
  );
};

function Caloriesapp() {
  const [calories, setCalories] = useState(null);

  const handleCalculate = (calories) => {
    setCalories(calories);
  };

  return (
    <div style={styles.container}>
      <div className='join-now'>
          <Link to = "/home">
          <button>Go Back</button></Link>





      </div>
      <h1>Calorie Calculator</h1>
      <ActivityForm onCalculate={handleCalculate} />
      {calories !== null && <ResultDisplay calories={calories} />}
    </div>
  );
}

export default Caloriesapp; 

