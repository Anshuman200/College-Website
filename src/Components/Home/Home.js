// import React from "react";
// import { Box, Button, Card, Container } from "@material-ui/core";
// import { Row } from "./FooterStyles.js";
// import Albumb from "./Albumb.js";

// const bgStyle = {
//   color: "blue",
//   height: "86.5vh",
//   backgroundImage: `url('./images/bg.jpg')`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundColor: "#000",
//   opacity: "0.8",
// };

// const form = {
//   backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
//   color: "#fff",
//   fontWeight: "bold",
//   border: "1px solid #4ad456",
//   padding: "20px",
//   textAlign: "center",
//   paddingBottom: "10px",
// };

// // const time = {
// //   backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
// //   color: "#fff",
// //   fontWeight: "bold",
// //   border: "1px solid #4ad456",
// //   padding: "20px",
// //   textAlign: "center",
// //   paddingBottom: "10px",

// // };

// const text = {
//   fontFamily: `'Source Serif 4', sans-serif`,
// };
// const time = {
//   textAlign: "right",
//   // border:'1px solid #fff',
//   alignItem: "right",
//   wordWrap: "wrap",
// };

// // function submit();

// const Home = () => {
//   // Clock section:
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "Morning ";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "Afternoon ";
//   } else {
//     timeOfDay = "Night ";
//   }
//   // End of clock !!!!!!!!!!!!

//   return (
//     <Box container style={bgStyle}>
//       <Container container>
//         {/* <Card style={{time}}>

//       </Card> */}
//         <Card style={form}>
//           <h5 style={time}>
//             Good {timeOfDay} :) <br /> Time is {hours}:{minutes}
//           </h5>
//           <h1 style={text}>Join the Course</h1>
//           <form>
//             <label style={{}}>
//               <Row>
//                 <input
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     boxShadow: "none",
//                     fontFamily: "cursive",
//                   }}
//                   type="text"
//                   placeholder="Full Name"
//                 />
//               </Row>
//               <Row>
//                 <input
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     fontFamily: "cursive",
//                   }}
//                   type="text"
//                   placeholder="Mobile No."
//                 />
//               </Row>
//               <Row>
//                 <input
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     fontFamily: "cursive",
//                   }}
//                   type="text"
//                   placeholder="Email Id"
//                 />
//               </Row>
//               <Row>
//                 <input
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     fontFamily: "cursive",
//                   }}
//                   type="text"
//                   placeholder="City"
//                 />
//               </Row>
//               <Row>
//                 <input
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     fontFamily: "cursive",
//                   }}
//                   type="text"
//                   placeholder="State"
//                 />
//               </Row>
//               <Row>
//                 <select
//                   style={{
//                     margin: "10px 0 0",
//                     borderRadius: "3px",
//                     height: "2rem",
//                     paddingLeft: "2px",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   <option>Select Course</option>
//                   <option>Computer Science &amp; Engineering</option>
//                   <option>Civil Engineering</option>
//                   <option>Electronics &amp; Communication Engineering</option>
//                   <option>Machenical Engineering</option>
//                   <option>Electrical Engineering</option>
//                   <option>Applied Science &amp; Humanities</option>
//                 </select>
//               </Row>
//               <Row>
//                 <Button
//                   variant="contained"
//                   style={{
//                     backgroundColor: "green",
//                     marginTop: "1rem",
//                     color: "#ffafe0",
//                     marginBottom: "1.5rem",
//                     fontFamily: "cursive",
//                   }}
//                 >
//                   Apply Now
//                 </Button>
//               </Row>
//             </label>
//           </form>
//         </Card>
//       </Container>
//     </Box>
//   );
// };

// export default Home;

/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

/*

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

*/

import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import home_bg from "../Home/images/home_bg.jpg";
import Department from "./Department";
import Albumb from "../../Albumb/Albumb";

const useStyle = makeStyles({
  mainStyle: {
    backgroundImage: "url(" + home_bg + ")",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    top: "5.3rem",
    textAlign: "center",
    height:"500px",
    display:"block",
    margin:"auto"
  },
  textArea: {
    color: "#ffeeaa",
    textAlign: "center",
    marginTop: "15%",
    // width:"50%",
    wordWrap: "break-word",
    // alignItems: "center",
    display:"block",
    margin:"auto"
  },
  albumbStyle: {
    // background: '#AFD394',
    // borderRadius: "10px",
    // position:"absolute",
    width: "100%",
    // height: "549px",
    marginTop: "30rem",
    // background: "linear-gradient(135deg, #FE6B8B 30%, #FF8E53 90%)",
    background: "#AFD394",
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function Home() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainStyle}>
        <Container className={classes.textArea}>
          <Typography variant="h3">Welcome to DVSIET</Typography>
          <Typography variant="h5">
            As Engineers, we were going to be in a position to change the world
            – not just study it.
          </Typography>
          {/* <Button variant="contained" className={classes.btnSection}>
            View More
          </Button> */}
        </Container>
      </Box>
      <Box className={classes.albumbStyle}> 

      <Albumb />
      </Box>
      <Department />
    </>
  );
}
