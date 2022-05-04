import { Box, Grid, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import Image from "./images/bg.jpg";
import Approval from "../Home/Approval"

const useStyle = makeStyles({
  mainSection: {
    margin: "25px 10px 10px 10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    boxSizing: "border-box",
    // flexWrap:"wrap",
    alignItems: "center",
    alignContent: "space-around",
  },
  imgSection: {
    width: "32rem",
    height: "30rem",
    marginBottom: "2rem",
    borderRadius: "10px",
    marginLeft: "-8px",
    boxShadow: '0 3px 5px 2px rgba(105, 105, 115, .7)',
    maxWidth:"100%",
    display:"block",
    margin:"auto",
    boxSizing:"border-box",
    // background:"rgb(205, 25, 200)"
    "@media(maxwidth:500)":{
      width:"100%",
      height:"auto"
    }
  },
  textSection: {
    marginBottom: "8px",
    fontFamily: `'Source Serif 4', sans-serif`,
    wordWrap: "break-word",
    fontWeight: "bold",
    textAlign: "center",
    borderBottom:"1px solid grey",
    marginTop:"2rem",
    "@media(maxwidth:500)":{
      marginTop:"1rem",
      marginBottom:"4px",
    }
  },
  text: {
    // marginLeft:"10px",
    textAlign: "left",
    // marginLeft: "8px",
  },
});

export default function Banner() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainSection}>
        <Grid container>
          <Grid items lg={5} md={6} sm={12} xs={12}>
            <img className={classes.imgSection} src={Image} alt="Image" />
          </Grid>

          <Grid items lg={7} md={6} sm={12} xs={12}>
            <Typography variant="h2" className={classes.textSection}>
              Top Engineering &amp; Technical Institute in Meerut UP
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Dewan VS Institute of Engineering &amp; Technology, the best
              B.Tech Institute in Meerut, UP, India is on an enthralling path of
              growth and development since its establishment in 2007. It boasts
              of highly qualified faculty which are the backbone of the Top
              Engineering Institute in Meerut, UP, India. In tune with the
              latest in the industry, the institute is constantly upgrading its
              syllabi to meet the growing demands of the public and private
              sector industries. Courses have been designed to equip the
              students to be able to build the infrastructure for growth in
              order to secure their future. Every course comes with adequate
              technical know-how, state-of-art technology labs and enough
              opportunities for project-based learning. This makes it the most
              popular B.Tech Institute in Meerut.
            </Typography>
            {/* <Button to="/about">View More</Button> */}
          </Grid>
        </Grid>
      </Box>
      <Approval />
    </>
  );
}

// &amp;     -> means &
