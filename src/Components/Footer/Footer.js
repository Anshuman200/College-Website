import React from "react";
import Logo from "../Home/images/f-logo.png";
import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyle = makeStyles({
  mainSection: {
    background: "linear-gradient(2deg, #FE6B8B 30%, #FF8E53 90%)",
    marginTop: "1em",
  },
  containerSection: {
    borderBottom: "1px solid black",
    paddingBottom:"1em",
  },
  logoSection: {
    width: "120px",
    height: "auto",
    margin: "auto",
    display: "block",
  },
  bottomText: {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "0.5rem",
    marginTop: "0.5rem",
    wordWrap: "break-word",
  },
  headText: {
    position: "relative",
    lineHeight: "1.3em",
    // color: "#fff",
    textTransform: "capitalize",
    margin: "0",
    fontSize: "24px",
    fontWeight: "600",
  },
  secondaryText: {
    fontSize: "15px",
    // color: "#505050",
    fontFamily: `'Rubik', sans-serif`,
    verticalAlign: "baseline",
    lineHeight: "26px",
    fontWeight: "400",
    overflowX: "hidden",
    "@media(min-width:300px) and (max-width:400px)": {
      "& Link": {
        paddingTop: "5px",
        lineHeight: "30px",
        fontSize: "18px",
        paddingBottom: "5px",
        textDecoration:"none",
      },
    },
    
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <Box className={classes.mainSection}>
      <Container maxWidth="lg" className={classes.containerSection}>
        <Grid container spacing={5}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
           <Link href="/">
            <img className={classes.logoSection} src={Logo} alt="Logo" />
           </Link>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.headText}>Resources</Box>
              <Box>
                <Link className={classes.secondaryText} href="https://www.aicte-india.org/" color="inherit">
                  AICTE
                </Link>
              </Box>
              <Box>
                <Link className={classes.secondaryText} href="https://nchm.nic.in/" color="inherit">
                  NCHMCT
                </Link>
              </Box>
              <Box>
                <Link
                  className={classes.secondaryText} href="https://www.ccsuniversity.ac.in/ccsu/index.php"
                  color="inherit"
                >
                  CCSU
                </Link>
              </Box>
              <Box>
                <Link className={classes.secondaryText} href="https://aktu.ac.in/" color="inherit">
                  AKTU
                </Link>
              </Box>
              <Box>
                <Link className={classes.secondaryText} href="https://www.education.gov.in/hi" color="inherit">
                  MHRD
                </Link>
              </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.headText}>Quick Links</Box>
            <Box>
              <Link
                className={classes.secondaryText} href="https://dewaninstitutes.com/grievance-cell"
                color="inherit"
              >
                WGC
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="https://dewaninstitutes.com/blog" color="inherit">
                BLOGS
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="/" color="inherit">
                Faq's
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="/" color="inherit">
                Site Map
              </Link>
            </Box>
            <Box>
              <Link
                className={classes.secondaryText} href="https://dewaninstitutes.com/terms-of-use"
                color="inherit"
              >
                Terms of Usage
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.headText}>Social Media</Box>
            <Box>
              <Link
                className={classes.secondaryText} href="https://www.facebook.com/DewanVSGrp/?ref=hl."
                color="inherit"
              >
                <FacebookIcon style={{ color: "blue" }} /> Facebook
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="https://www.instagram.com/dvsgi/" color="inherit">
                <InstagramIcon style={{ color: "#ed5896", borderRadius: "5px" }} />{" "}
                Instagram
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="https://twitter.com/dewangrp" color="inherit">
                <TwitterIcon style={{ color: "blue" }} /> Twitter
              </Link>
            </Box>
            <Box>
              <Link
                className={classes.secondaryText} href="https://www.linkedin.com/company/dewangroup/"
                color="inherit"
              >
                <LinkedInIcon style={{ color: "blue" }} /> LinkedIn
              </Link>
            </Box>
            <Box>
              <Link
                className={classes.secondaryText} href="https://www.youtube.com/channel/UCgeFlJ-57jBPVz-9dyqjfFA"
                color="inherit"
              >
                <YouTubeIcon style={{ color: "red" }} /> Youtube
              </Link>
            </Box>
            <Box>
              <Link className={classes.secondaryText} href="https://in.pinterest.com/dvsgid/" color="inherit">
                <PinterestIcon style={{ color: "red" }} /> Pinterest
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.bottomText}>
        <Typography variant="body1">
          © 2021 Dewan VS Group of Institutions - All Rights Reserved
        </Typography>
        <Typography variant="body1">Designed By AAAN Team</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
