import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Graduate from "../Home/images/graduate.png";
import Cards from "../Home/Cards";
import Banner from '../Home/Banner';

const useStyle = makeStyles({
  mainSection: {
    background: "#AFD394",
    // marginTop: "490px",
  },
  mainText: {
    textAlign: "center",
    marginBottom: "3rem",
    color: "#000",
    fontSize: "50px",
    lineHeight: "59px",
    // paddingTop: "0.1em",
    fontFamily:`'Source Serif 4', sans-serif`,
    wordWrap:"break-word",
    // backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontWeight:"500",
  },
});

export default function Department(props) {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainSection}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.mainText}>
            Departments
          </Typography>

          {/* CARDS */}

          {/* <Box sx={{ flexGrow: 1}}> */}
          <Box>
            <Grid
              container
              //   spacing={{ xs: 2, md: 3 }}
              spacing={3}
              direction="row"
              justifyContent="center"
            >
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="CSE"
                  text="Computer Science &amp; Engineering is the most demanded branch in Engineering."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="ME"
                  text="Mechanical Engineering is the most demanded branch in Engineering."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="CE"
                  text="Civil Engineering is the most demanded branch in Engineering."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="EE"
                  text="Electrical Engineering is the most demanded branch in Engineering."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="IT"
                  text="Information Technology is the most demanded branch in Engineering."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={Graduate}
                  mainText="ECE"
                  text="EC Engineering is the most demanded branch in Engineering."
                />
              </Grid>
            </Grid>
          </Box>
          
          <Banner />
        </Container>
      </Box>
    </>
  );
}
