import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import AICTE from "../Home/images/aicte.png";
import AKTU from "../Home/images/aktu.png";
import MHRD from "../Home/images/mhrd.png";
import Cards from "../Home/Cards";

const useStyle = makeStyles({
  mainSection: {
    background: "#AFD394",
  },
  mainText: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#000",
    fontSize: "50px",
    lineHeight: "59px",
    fontFamily: `'Source Serif 4', sans-serif`,
    wordWrap: "break-word",
    fontWeight: "500",
  },
});

export default function Department(props) {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainSection}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.mainText}>
            Accreditations &amp; Approvals
          </Typography>

          {/* CARDS */}
          <Box>
            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={AICTE}
                  mainText="AICTE AFFILIATION"
                  text="In accordance with the provisions of the AICTE Act (1987), for the first five years after its inception in 1988, the Minister for Human Resource Development, the Government of India, was the Chairman of the Council. The first full-time Chairman was appointed on July 2, 1993 and the Council was reconstituted in March 1994 term of three years."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={AKTU}
                  mainText="AKTU AFFILIATION"
                  text="The University is affiliating in nature and its jurisdiction spans the entire state of U.P. in affiliating B.Tech., M.B.A., M.C.A., B.Arch., B. Pharma., B.H.M.C.T., M.Tech. and Ph.D. programmes in 756 colleges/institutions graduate, postgraduate and doctoral level training in all government and private institutions."
                />
              </Grid>
              <Grid items lg={4} md={4} sm={6} xs={12}>
                <Cards
                  img={MHRD}
                  mainText="MHRD AFFILIATION"
                  text="Education plays a significant and remedial role in balancing the socio-economic fabric of the Country. Since citizens of India are its most valuable resource, our billion-strong nation needs the nurture and care in the form of basic education to achieve a better quality of life. This warrants an all-round development of building strong foundations in education."
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
