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

const useStyle = makeStyles({
  mainSection: {
    margin: "20px 5px 5px 10px",
    marginTop: "4rem",
  },
  header: {
    borderRight: "1px solid red",
    paddingLeft: "2rem",
    display:"flex-start",
    maxWidth:"96%",
    fontSize:"18px",
  },
  textBody:{
    paddingLeft: "2rem",
    display:"flex-start",
    maxWidth:"96%",
    fontSize:"16px",
  },
});

export default function Banner() {
  const classes = useStyle();
  return (
    <Container className={classes.mainSection}>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="h6" className={classes.header}>
                IIP Cell Activities
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="h6" className={classes.textBody}>
              Honorary Advisory Board
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              Developing close links between Industry and institute by interaction programs.
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Col. (Dr.) Naresh Goyal, Executive Director- Dewan VS Group of Institutions
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              To encourage industry and organizations for placement and training of students in Industries.
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Ms. Shilpi Bansal, Additional director, Dewan VS Institute of Engineering & Technology
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              Implementing R&amp;D programmes, sponsored and joint R&D projects from industries, in the Institute.
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Er. Yogesh Garg, Managing Director, Systeller Innovations
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              To conduct Industrial Training, Visits and Internships for the students and faculty.
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Er. Vivek Chandra Sharma, Director (Technology Solution Management)- AT&amp;T, Dallas, Texas, USA
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              Organizing seminars, symposiums, exhibitions and workshops etc.
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Er. Suneet Mishra, Executive Director- Magna Powertrain, Nanchang, China
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ marginBottom: "1rem" }}>
        <Grid container spacing={3}>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.cardText}>
              <Typography variant="body1" className={classes.header}>
              Organizing guest lectures on latest technological advancements, evaluation of project work, and workshops from industrial experts in the Institute
              </Typography>
            </Box>
          </Grid>
          <Grid items lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" className={classes.textBody}>
            Er. Vineet Mishra, Assistant General Manager & Department Head (Body & CS Planning, Cost & Sourcing Division-1) - Honda Cars India Ltd.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
