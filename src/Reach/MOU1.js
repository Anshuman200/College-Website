import React from "react";
import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";


const useStyle = makeStyles({
  mainText: {
    // border:"2px solid red",
    fontSize: "45px",
    marginTop: "2rem",
    fontWeight: "700",
    background: "linear-gradient(360deg, #FE6B8B 30%, #FF8E53 90%)",
    wordBreak: "break-word",
  },
  secondText: {
    margin: "0 0 26px",
    lineHeight: "2",
    fontSize: "16px",
    color: "#363636",
    fontWeight: 400,
    fontFamily: `'Roboto',sans-serif !important`,
    justifyContent: "space-around",
  },
  middleText: {
    margin: "10px 5px 10px 5px",
  },
  iconText: {
    textTransform: "translate(0.5)",
    marginBottom: "5px",
    marginLeft:"2rem",
  },
  lastText: {
    fontSize: "45px",
    marginTop: "2rem",
    marginBottom: "2rem",
    fontWeight: "700",
    background: "#edf0f2",
    wordBreak: "break-word",
  },
});

function MOU2() {
  const classes = useStyle();
  return (
    <>
      <Container>
        <Typography variant="h4" className={classes.mainText}>
          Memorandum of Understanding (MOU) Signed
        </Typography>
        <Box className={classes.secondText}>
          <Typography variant="subtitle2" className={classes.middleText}>
            National Programme on Technology Enhanced Learning (under Ministry
            of Human Resource Development, Government of India) as a partner for
            running online skill development/expertise enhancement certification
            programs
          </Typography>
          <Typography variant="subtitle2" className={classes.middleText}>
            Ministry of Micro, Small and Medium Enterprises, Government of India
            as a partner in DVSIET Incubation Centre
          </Typography>

          <Typography variant="subtitle2" className={classes.middleText}>
            Indian Society of Heating, Refrigerating and Air Conditioning
            Engineers (ISHRAE) for providing a common platform to the
            entrepreneurs, industry persons, industries and students for sharing
            of ideas, innovations and technology development
          </Typography>

          <Typography variant="subtitle2" className={classes.middleText}>
            Meerut Management Association (MMA)
          </Typography>

          <Typography variant="subtitle2" className={classes.middleText}>
            Geological Society of India (GSI) under the mentorship of Ministry
            of Earth Sciences, Government of India for working towards the
            environmental protection initiatives and organizing International
            Earth Science Olympiad for the students
          </Typography>

          <Typography variant="subtitle2" className={classes.middleText}>
            Entrepreneurship Development Institute of India (EDII), Gandhi Nagar
            (an acknowledged National Resource Institute) for entrepreneurship
            awareness and development programs for the students
          </Typography>
        </Box>
        <Box>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s Redhat Academy
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s S.O. Infotech, Noida
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s Aptron, Noida
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s Dayal Spun Pipes Pvt. Ltd., Meerut
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s Omake Healthcare Pvt. Ltd., Meerut
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"green", marginRight:"5px"}}/>
              M/s Crystal Precision Pvt. Ltd., Meerut
            </Box>
          </Typography>
        </Box>

        {/* Second Part */}
        <Typography variant="h4" className={classes.lastText}>
          Memorandum of Understanding (MOU) in Process
        </Typography>
        <Box>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              National Skill Development Corporation (under Ministry of Skill
              Development &amp; Entrepreneurship, Government of India) for
              running different skill development certification programs
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              ICT Academy, Indian Institute of Technology, Kanpur for running
              different skill development, facility visits and certification
              programs
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              IEEE for Student’s chapter and other activities
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              M/s K. R. Industries, Meerut
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              M/s Systeller Innovations, Meerut
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.iconText}>
              <DoubleArrowIcon  style={{color:"blue", marginRight:"5px"}}/>
              M/s Transtron Electricals Pvt. Ltd., Meerut
            </Box>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default MOU2;
