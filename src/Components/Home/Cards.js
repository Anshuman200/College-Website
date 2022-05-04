import React from "react";
import {
  Box,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  imgSection: {
    height: "90px",
    // border: "1px solid #000",
    borderRadius: "50%",
    marginBottom: "1rem",
    paddingTop: "1rem",
    alignItems:"center",
    display:"block",
    justifyContent:"center",
    margin: "auto",
  },
  mainTextSection: {
    textAlign: "center",    
    fontSize: "26px",
    fontWeight:"600",
    color: "#43b339",
    textTransform: "uppercase",
  },
  secondTextSection: {
    margin: "20px ",
    overflowWrap: "break-word",
    paddingBottom:"1rem",
  },
  btnSection: {
    marginLeft: "4px",
    marginBottom:"0.5rem",
    alignItems:"center",
    // backgroundColor:"#1f5",
    width:"98%",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export default function Cards(props) {
  const classes = useStyle();
  return (
    <>
      <Paper style={{margin:"10px 10px 10px 10px"}}>
        <Box>
          <img
          style={{}}
            className={classes.imgSection}
            src={props.img}
            alt="Image"
          />
        </Box>
        <Typography variant="h3" className={classes.mainTextSection}>
          {props.mainText}
        </Typography>
        <Typography className={classes.secondTextSection}>
          {props.text}
        </Typography>
        {/* <Button variant="contained" className={classes.btnSection}>
          View More
        </Button> */}
      </Paper>
    </>
  );
}
