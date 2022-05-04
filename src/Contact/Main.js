import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import { Box, Card, Container, Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  addText: {
    textAlign: "center",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: "45px",
    textAlign: "center",
    margin: "auto",
    display: "block",
    marginBottom: "10px",
    color: "#447ec9",
    paddingTop: "0.5rem",
  },
  upperText: {
    display: "block",
    color: "#505050",
    fontSize: "20px",
    fontWeight: "500",
    paddingBottom: "10px",
    lineHeight: "1.2",
  },
  lowerText: {
    fontSize: "18px",
    color: "#111111",
    fontWeight: "400",
    padding: "5px 5px 20px 5px",
  },
});

function Main() {
  const classes = useStyle();
  return (
    <Container>
      <Grid style={{ padding: "8px 5px 30px 5px" }}>
        <Grid container spacing={5}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card>
              <LocationOnIcon className={classes.iconStyle} />
              <Box className={classes.addText}>
                <Box className={classes.upperText}>Address</Box>
                <Box className={classes.lowerText}>
                  NH-58, By-Pass Road, Partapur, Meerut-250103 Uttar Pradesh,
                  INDIA
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card>
              <MailOutlineIcon
                className={classes.iconStyle}
                style={{ marginTop: "1.7rem" }}
              />
              <Box className={classes.addText}>
                <Box className={classes.upperText}>Email Address</Box>
                <Box className={classes.lowerText}>
                  info@dewaninstitutes.org
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card>
              <CallIcon className={classes.iconStyle} />
              <Box className={classes.addText}>
                <Box className={classes.upperText}>Phone Number</Box>
                <Box className={classes.lowerText}>
                  +91-121-2440315 <br />
                  +91-121-2440375
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
