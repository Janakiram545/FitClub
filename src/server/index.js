// const express =require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const EmployeeModel = require('./models/Employee');
// const CaloriesModel = require('./models/Calories'); 
// const bcrypt = require('bcrypt');


// const app = express();
// app.use(express.json());
// app.use(cors());


// mongoose.connect('mongodb://127.0.0.1:27017/employee');




// app.post('/login',(req,res)=>{
//     const {email,password} = req.body;
//     EmployeeModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password===password){
//                 res.json("Success")
//             } else{
//                 res.json("the password is incorrect")
//             }
//         }else{
//             res.json("No record existed")
//         }
//     })   

// })

// app.post('/register',(req,res)=>{
//     EmployeeModel.create(req.body)
//     .then(Employees=> res.json('employee'))
//     .catch(err=>res.json(err))
// })


// app.post('/add-calories', (req, res) => {
//     const { userId, date, caloriesConsumed } = req.body;
//     CaloriesModel.create({ userId, date, caloriesConsumed })
//       .then(caloriesEntry => res.json(caloriesEntry))
//       .catch(err => res.json(err));

// });

// app.listen(3001,()=>{
//     console.log('server is running on port 3001');
// })



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const CaloriesModel = require('./models/Calories'); 
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');


// ... [rest of the imports and setup]

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).json("Error in password comparison");
          } else if (result) {
            res.json("Success");
          } else {
            res.json("The password is incorrect");
          }
        });
      } else {
        res.json("No record existed");
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json("Error in finding user");
    });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      EmployeeModel.create({ email, password: hashedPassword })
        .then(employee => res.json(employee))
        .catch(err => {
          console.error(err);
          res.status(500).json(err);
        });
    }
  });
});

app.post('/add-calories', (req, res) => {
  const { userId, date, caloriesConsumed } = req.body;
  CaloriesModel.create({ userId, date, caloriesConsumed })
    .then(caloriesEntry => res.json(caloriesEntry))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('server is running on port 3001');
});