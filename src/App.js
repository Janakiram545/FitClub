import Home from './components/Home';
import Login from './components/Login/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import Afterhome from './components/LoginHome';
import Signup from './components/Login/Signup';
import BenefitComponent from './components/Plans/Benefits/Benefits';
import Caloriesapp from './components/Calories/Calories';
import BmiCalculator from './components/Calories/BmiCalculator';
import Payment from './components/Plans/Payment/Payment';
import Mini from './components/Programs/Mini/Mini';
import Cardio from './components/Programs/Mini/Cardio';
import Weightloss from './components/Programs/Mini/Weightloss';
import Health from './components/Programs/Mini/Health';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ='/register' element ={<Signup/>}></Route>
        <Route path="/home/" element={<Afterhome/>}/>
        <Route path="/login/" element={<Login/>}/>
        <Route path="/mini" element={<Mini/>}/>
        <Route path="/cardio" element={<Cardio/>}/>
        <Route path="/Weightloss" element={<Weightloss/>}/>
        <Route path="/Health" element={<Health/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/Benefits" element={<BenefitComponent/>}/>
        <Route path="/calories" element={<Caloriesapp/>}/>
        <Route path="/BMI" element={<BmiCalculator/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
