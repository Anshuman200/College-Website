import React from "react";
import { Box, Paper, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  imgSection: {
    height: "150px",
    width:"150px",
    // border: "1px solid #000",
    borderRadius: "10%",
    // marginLeft: "40%",
    margin: "1rem 0 1rem",
    alignItems: "center",
  },
  mainTextSection: {
    textAlign: "center",  
    fontSize: "30px",
    fontWeight:"600",
    color: "#43b339",
    textTransform: "uppercase",
  },
  secondTextSection: {
    margin: "5px ",
    overflowWrap: "break-word",
  },
  thirdTextSection: {
    margin: "10px ",
    overflowWrap: "break-word",
    paddingBottom:"0.4rem"
  },
});

export default function Cards(props) {
  const classes = useStyle();
  return (
    <>
      {/* <Paper style={{ margin: "10px 10px 10px 10px" }}> */}
      <Paper style={{ margin: "10px" }}>
        <Box>
          <img
            className={classes.imgSection}
            src={props.img}
            alt="Image"
          />
        </Box>
        <Typography variant="h3" className={classes.mainTextSection}>
          {props.mainText}
        </Typography>
        <Typography className={classes.secondTextSection}>
          {props.package}
        </Typography>
        <Typography className={classes.secondTextSection}>
          {props.name}
        </Typography>
        <Typography className={classes.thirdTextSection}>
          {props.text}
        </Typography>
      </Paper>
    </>
  );
}
