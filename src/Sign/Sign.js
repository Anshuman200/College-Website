// import {
//   CardContent,
//   makeStyles,
//   Typography,
//   Card,
//   Button,
//   TextField,
//   Grid,
//   Box,
//   Link,
// } from "@material-ui/core";
// import { React, useState } from "react";
// import bgImage from "../Components/conBack.jpg";
// import { inputFormElements } from "./FormElements";

// const useStyle = makeStyles({
//   background: {
//     backgroundImage: "url(" + bgImage + ")",
//     width: "auto",
//     height: "110vh",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     position:"relative"
//   },
// });

// const Sign = () => {
//   const margin = { margin: "0 5px" };
//   const classes = useStyle();

//   return (
//     <>
//       <Box className={classes.background}>
//         <Grid style={{ padding: "35px 5px 0 5px" }}>
//           <Card style={{ maxWidth: 600, margin: "0 auto" }}>
//             <CardContent>
//               <Typography
//                 variant="h4"
//                 color="primary"
//                 align="center"
//                 style={{ fontFamily: `'Source Serif 4', sans-serif` }}
//               >
//                 Create an Account
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 color="textSecondary"
//                 align="center"
//               >
//                 Fill all the mandatory fields to create an account
//               </Typography>
//               <form>
//                 <Typography variant="body2" align="left" gutterBottom>
//                   Personal Info :{" "}
//                 </Typography>
//                 <Grid container spacing={2}>
//                    {inputFormElements.slice(0, 6).map((input) => (
//                     <Grid item xs={input.xs} sm={input.sm}>
//                       <TextField {...input} />
//                     </Grid>
//                    ))}
//                 </Grid>

//                 <Typography variant="body2" align="left" gutterBottom>
//                   Address Info :
//                 </Typography>

//                 <Grid container spacing={2}>

//                   {inputFormElements.slice(6).map((input) => (
//                     <Grid item xs={input.xs} sm={input.sm}>
//                       <TextField {...input} />
//                     </Grid>
//                   ))}

//                   {/* BUTTON SECTION */}

//                   <Grid container spacing={2}>
//                     <Grid item xs={12} align="center">
//                       <Box style={{ marginTop: "2em" }}>
//                         <Button style={margin} variant="contained" color="secondary" type="reset">
//                           Reset
//                         </Button>
//                         <Button variant="contained" color="primary" name="submit" value="Submit" type="submit">
//                           Submit
//                         </Button>
//                         <Grid container justifyContent="flex-end">
//                           <Grid item>
//                             <Link href="/login" variant="body2" align="center">
//                               Already have an account? Sign in
//                             </Link>
//                           </Grid>
//                         </Grid>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </form>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Sign;

import "./Register.css";
import React, { useState } from "react";
import axios from "axios";

function Register() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleConfPasswordChange = (e) => {
  //   setConfPassword(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   if (password != confPassword) {
  //     alert("Password Not Match");
  //   } else {
  //     alert(
  //       'A form was submitted with Name : " ' + name + ' " and Email : " ' + email + ' "'
  //     );
  //     alert("Form submitted Successfully !!!");
  //   }
  //   e.preventDefault();
  // };
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value});

    // console.log(data);
  }
  const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    console.log(sendData);

  }

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={submitForm}
        >
          <h3>Registration Form</h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={data.name}
            name="name"
            required
            onChange={handleChange} 
          />
          <br />

          {/* <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br /> */}

          <label>Email:</label>
          <br />
          <input
            type="email"
            value={data.email}
            name="email"
            required
            onChange={handleChange}
          />
          <br />

          <label>Password:</label>
          <br />
          <input
            type="password"
            value={data.password}
            name="password"
            required
            maxLength={12}
            minLength={6}
            onChange={handleChange}
          />
          <br />

          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            // value={data.confPassword}
            required
            // onChange={handleChange}
          />
          <br />

          <input type="submit" name="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Register;

// import React, { Component } from "react";
// import "./Register.css";
// import {Card, CardContent,Button, CardActions, TextField} from '@material-ui/core'

// class Register extends Component() {
//   constructor(props){
//     super(props);
//     this.onChangeName = this.onChangeName.bind(this);

//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       name: '',
//     }
//   }
//   onChangeName(e){
//     this.setState({
//       name:e.target.value
//     });
//   }
//   render() {
//     return (
//     <div className="card">
//       <Card className="cardStyle">
//         <CardContent>
//           <div className="registerText">Sign Up</div>
//           <TextField label='Full Name' value={this.state.name} onChange={this.onChangeName} />
//           <TextField label='Email' />
//           <TextField label='Phone Number' />
//           <TextField label='Password' />
//           <TextField label='Confirm Password' />
//         </CardContent>

//         <CardActions className="cardActions">
//           <Button style={{background:'black',color:'white'}}>Sign Up</Button>
//         </CardActions>
//       </Card>
//     </div>

//     );
//   }
// }

// export default Register;

// New Form
// import React from 'react';
// import './Register.css'

// const Sign = () => {
//   return (
//     <div className=" main-box">
//       <div className="row">
//         <div className="col-md-12 text-center">
//           <h1>Register</h1>
//         </div>
//         <div>
//         <div className="row">
//           <div className="col-md-6">First Name</div>
//           <div className="col-md-6"><input type="text" name="first_name" /></div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">Last Name</div>
//           <div className="col-md-6"><input type="text" name="last_name" /></div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">Email</div>
//           <div className="col-md-6"><input type="email" name="email" /></div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">Password</div>
//           <div className="col-md-6"><input type="password" name="password" /></div>
//         </div>
//         <div className="row">
//           <div className="col-md-6 text-center"><input type="submit" name="submit" value="register" /></div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign;
