import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Card,
  Paper,
  Container,
} from "@material-ui/core";
import React from "react";
import Image from "../Reach/images/rajiv_sir.jpg";
import Table from "./Table";
import MOU1 from "./MOU1";

const useStyle = makeStyles({
  mainSection: {
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    boxSizing: "border-box",
    // flexWrap:"wrap",
    alignItems: "center",
    // alignContent: "space-around",
  },
  imgSection: {
    width: "160px",
    height: "190px",
    border: "5px solid #cad3d5",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    // marginTop: "20rem",
    boxShadow: "0 3px 5px 2px rgba(105, 05, 215, .7)",
    // transform:"translate(-50%,)",
    // textAlign:"center",
    display: "block",
    margin: "auto",
    marginTop: "2rem",
  },
  textSection: {
    // fontFamily: `'Source Serif 4', sans-serif`,
    wordWrap: "break-word",
    fontWeight: "500",
    borderBottom: "1px solid grey",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    paddingBottom: "1rem",
    marginLeft: "0.2em",
  },
  textBody: {
    marginLeft: "8px",
  },
  cardText: {
    textAlign: "center",
    boxSizing: "border-box",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  headText: {
    textAlign: "center",
    alignItem: "center",
    fontWeight: "800",
    borderBottom: "1px solid grey",
    borderShadow: "black",
    fontFamily: `'Source Serif 4', sans-serif`,
    backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

export default function MOU() {
  const classes = useStyle();
  return (
    <Box style={{background: "#dfe8ed",}}>
    {/* <Box style={{background: "#AFD394",}}> */}
      <Container>
        <Typography className={classes.headText} variant="h2">
          IIP &amp; MOU
        </Typography>
        <Box className={classes.mainSection}>
          <Grid container>
            <Grid items lg={4} md={4} sm={12} xs={12}>
              <Paper style={{background: "#dfe8ed",paddingTop:"0.4rem"}}>
                <img className={classes.imgSection} src={Image} alt="Image" />
                <Box className={classes.cardText}>
                  <Typography variant="h5">
                    Prof. (Dr.) Rajeev Kaushik
                  </Typography>
                  <Typography variant="body2">Coordinator</Typography>
                  <Typography>
                    (Projects, Accreditations &amp; IIP Cell)
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid items lg={8} md={8} sm={12} xs={12}>
              <Typography variant="h3" className={classes.textSection}>
                Industry-Institute-Partnerships (IIP) and Memorandum of
                Understandings (MOUs)
              </Typography>
              <Typography variant="body1" className={classes.textBody}>
                IIP forms an important activity for any academic institute as
                its stakeholders interact with the real world. Not only the
                students are exposed to current industry practices but also the
                faculty gets sensitized to the latest practices leading them to
                blend practice with usual theoretical teaching methods. IIP Cell
                aims at effective, frequent and mutually beneficial interactions
                with the Industry and exploring links for the overall
                development of the stakeholders.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Table />
        <MOU1 />
      </Container>
    </Box>
  );
}
