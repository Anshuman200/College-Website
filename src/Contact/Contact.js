import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import image from "../Contact/Contact.jpg";
import { inputContactElements } from "./ContactElement";
import Main from "./Main"

const useStyle = makeStyles({
  imgSection: {
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "200vh",
    // height: "30%",
    margin: "1rem ",
    borderRadius: "6px",
    maxWidth: "-webkit-fill-available",
  },
  root: {
    textAlign: "center",
    alignItems: "center",
  },
  firstText: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textAlign: "center",
    // borderRadius: "10px",
    overflowWrap: "break-word",
    fontFamily: `'Source Serif 4', sans-serif`,
    // paddingBottom:"0.5em",
    marginTop:"1.5rem",
  },
  mainSectionColor: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .5)",
  },
});

function Contact() {
  const classes = useStyle();
  return (
    <Box className={classes.mainSectionColor}>
      <Container>
        {/* <Container> */}
          <img className={classes.imgSection} src={image} alt="Image" />
        {/* </Container> */}
        <Main />
        <Grid style={{ padding: "8px 5px 30px 5px" }}>
          <Card style={{maxWidth: 600, margin: "0 auto"}}>
            <Typography variant="h3" className={classes.firstText}>
              Get In Touch
            </Typography>
            <Grid container spacing={3} style={{padding:"2em"}}>
                  {inputContactElements.map((input) => (
                    <Grid item xs={input.xs} sm={input.sm} >
                      <TextField {...input}  />
                    </Grid>
                  ))}
                </Grid>
                <Typography style={{fontFamily:"sans-serif", fontWeight:"bold",paddingLeft:'2.5em'}} variant="body2" align="left" gutterBottom>
                   Message :{" "}
                </Typography>
                <textarea style={{width:"89%", marginLeft:"2em", }} fullWidth variant="outlined"></textarea>
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <Box style={{ marginTop: "2em" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{width:"90%", backgroundColor:"green", marginBottom:"2em",borderRadius:'20px'}}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
