import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Card from "../Placement/Card";
import img1 from "../Placement/images/1.jpg";

// IMAGE 18-19
import Aayush from "../Placement/img18-19/Aayush.jpg";
import Aditya from "../Placement/img18-19/Aditya.jpg";
import Ankush from "../Placement/img18-19/Ankush.jpg";
import Arpit from "../Placement/img18-19/Arpit.jpg";
import Ashish_Sharma from "../Placement/img18-19/Ashish_Sharma.jpg";
import Ashish from "../Placement/img18-19/Ashish.jpg";
import Avdhesh from "../Placement/img18-19/Avdhesh.jpg";
import Deepak from "../Placement/img18-19/Deepak.jpg";
import Himanshu from "../Placement/img18-19/Himanshu.jpg";
import Huzaifa from "../Placement/img18-19/Huzaifa.jpg";
import Krishna from "../Placement/img18-19/Krishna.jpg";
import Mahak from "../Placement/img18-19/Mahak.jpg";
import Nitin from "../Placement/img18-19/Nitin.jpg";
import Nuzhat from "../Placement/img18-19/Nuzhat.jpg";
import Prachi from "../Placement/img18-19/Prachi.jpg";
import Rakhi from "../Placement/img18-19/Rakhi.jpg";
import Rishabh from "../Placement/img18-19/Rishabh.jpg";
import Sanjay from "../Placement/img18-19/Sanjay.jpg";
import Shubham from "../Placement/img18-19/Shubham.jpg";

// IMAGE 19-20
import Aaushi from "../Placement/img19-20/Aaushi.jpg";
import Aman from "../Placement/img19-20/Aman.jpg";
import Anita from "../Placement/img19-20/Anita.jpg";
import Anuj from "../Placement/img19-20/Anuj.jpg";
import Ayushi from "../Placement/img19-20/Ayushi.jpg";
import Esha from "../Placement/img19-20/Esha.jpg";
import Harshit from "../Placement/img19-20/Harshit.jpg";
import Mayank from "../Placement/img19-20/Mayank.jpg";
import Prateek from "../Placement/img19-20/Prateek.jpg";
import Rahul from "../Placement/img19-20/Rahul.jpg";
import Shivam from "../Placement/img19-20/Shivam.jpg";
import Shristhi from "../Placement/img19-20/Shristhi.jpg";
import Tushar from "../Placement/img19-20/Tushar.jpg";

// IMAGE 20-21
import Aditya1 from "../Placement/img20-21/Aditya1.jpg";
import Anurag from "../Placement/img20-21/Anurag.jpg";
import Devesh from "../Placement/img20-21/Devesh.jpg";
import Gaurav from "../Placement/img20-21/Gaurav.jpg";
import Mukul from "../Placement/img20-21/Mukul.jpg";
import Nikhil from "../Placement/img20-21/Nikhil.jpg";
import Satendra from "../Placement/img20-21/Satendra.jpg";
import Tanuj from "../Placement/img20-21/Tanuj.jpg";
import Ujjwal from "../Placement/img20-21/Ujjwal.jpg";
import Zaid from "../Placement/img20-21/Zaid.jpg";
import graduate from "../Placement/img20-21/graduate.png"

// IMAGE 21-22
import Akansha from "../Placement/img21-22/Akansha.jpg";
import Akash from "../Placement/img21-22/Akash.jpg";
import Akash1 from "../Placement/img21-22/Akash1.jpg";
import Anmol from "../Placement/img21-22/Anmol.jpg";
import Anshu from "../Placement/img21-22/Anshu.jpg";
import Arun from "../Placement/img21-22/Arun.jpg";
import Arvind from "../Placement/img21-22/Arvind.jpg";
import Deepanshi from "../Placement/img21-22/Deepanshi.jpg";
import Harsh from "../Placement/img21-22/Harsh.jpg";
import Nikhil1 from "../Placement/img21-22/Nikhil1.jpg";
import Shivam1 from "../Placement/img21-22/Shivam1.jpg";
import Sunaina from "../Placement/img21-22/Sunaina.jpg";

const useStyle = makeStyles({
  mainSection: {
    textAlign: "center",
    background: "#AFD394",
  },
  mainText: {
    textAlign: "center",
    // marginBottom: "3rem",
    color: "#000",
    fontSize: "50px",
    lineHeight: "59px",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    fontFamily: `'Source Serif 4', sans-serif`,
    wordWrap: "break-word",
    fontWeight: "400",
  },
});

function Placement(props) {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainSection}>
        <Container maxWidth="lg">
          {/* <Box> */}
          {/* SESSION 2018 - 2022 */}
          <Typography variant="h2" className={classes.mainText}>
            Placements ~ 2021 - 2022
          </Typography>
            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Harsh}
                  mainText="CSE"
                  name="Harsh Vashishtha"
                  package="3.5 LAP"
                  text="Company: Wipro Technologies"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Akash}
                  mainText="CSE"
                  name="Akash Aggarwal"
                  package="1.8 LPA"
                  text="Company: Mobiloitte Technology"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Shivam1}
                  mainText="CSE"
                  name="Shivam Prajapati"
                  package="1.8 LPA"
                  text="Company: Mobiloitte Technology"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Anmol}
                  mainText="CSE"
                  name="Anmol agarwal"
                  package="1.8 LPA"
                  text="Company: Mobiloitte Technology"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Sunaina}
                  mainText="CSE"
                  name="Km Sunaina"
                  package="2.4 LPA"
                  text="Company: JAIR Network &amp; Services"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Akansha}
                  mainText="CSE"
                  name="Km Akansha Daiya"
                  package="2.6 LPA"
                  text="Company: Khel Group "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Akash1}
                  mainText="CSE"
                  name="Akash"
                  package="1.8 LPA"
                  text="Company: Mobiloitte Technology"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Nikhil1}
                  mainText="CSE"
                  name="Nikhil Sharma"
                  package="1.8 LPA"
                  text="Company: Mobiloitte Technology"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Anshu}
                  mainText="CSE"
                  name="Anshu"
                  package="2.6 LPA"
                  text="Company: Khel Group "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Arun}
                  mainText="CSE"
                  name="Arun Kumar"
                  package="3.5 LPA"
                  text="Company:ForceBolt Pvt. Ltd."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Deepanshi}
                  mainText="CSE"
                  name="Deepanshi"
                  package="3.5 LPA"
                  text="Company: Wipro Limited"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Arvind}
                  mainText="CSE"
                  name="Arvind Singh"
                  package="3.6 LPA"
                  text="Company: Mirketa Software Pvt Ltd."
                />
              </Grid>
            </Grid>

            {/* SESSION 2017 - 2021 */}
          <Typography variant="h2" className={classes.mainText}>
            Placements ~ 2020 - 2021
          </Typography>
            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Aditya1}
                  mainText="CSE"
                  name="Aditya Madan"
                  package="1.8 LPA"
                  text="Company: LIFE WAY TECH INDIA LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Ujjwal}
                  mainText="CSE"
                  name="Ujjwal Munday"
                  package="1.8 LPA"
                  text="Company: LIFE WAY TECH INDIA LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Zaid}
                  mainText="CSE"
                  name="Mohd. Zaid"
                  package="1.8 LPA"
                  text="Company: LIFE WAY TECH INDIA LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Satendra}
                  mainText="CSE"
                  name="Satendra Kumar"
                  package="4.2 LPA"
                  text="Company: THOUGHTS2BINARY CONSULTING AND SOLUTION LLP"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Tanuj}
                  mainText="CSE"
                  name="Tanuj"
                  package="- LPA"
                  text="Company: TECH-MAHINDRA, (ELEVATE TECHNICAL INTERNSHIP PROGRAM)"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Nikhil}
                  mainText="CSE"
                  name="Nikhil Sirohi"
                  package="1.8 LPA"
                  text="Company: AKILI SYSTEMS PVT. LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Mukul}
                  mainText="CSE"
                  name="Mukul Kumar"
                  package="2.0 LPA"
                  text="Company: ACCESSIONE TECHNOLOGY PRIVATE LIMITED"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Anurag}
                  mainText="CSE"
                  name="Anurag Garg"
                  package="2.0 LPA"
                  text="Company: ACCESSIONE TECHNOLOGY PRIVATE LIMITED"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Gaurav}
                  mainText="CSE"
                  name="Gaurav Goel"
                  package="3.6 LPA"
                  text="Company: GRAPHICS(INDIA) Pvt. Ltd. "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Devesh}
                  mainText="CSE"
                  name="Devesh Kaushik"
                  package="1.8 LPA"
                  text="Company: BRITO IT SERVICES PVT LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={graduate}
                  mainText="CSE"
                  name="Saurav Kumar"
                  package=" - LPA"
                  text="Company: Digital Info Solutions"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={graduate}
                  mainText="CSE"
                  name="Vishvjeet Sharma"
                  package=" - LPA"
                  text="Company: Digital Info Solutions"
                />
              </Grid>
            </Grid>

            {/* SESSION 2016 - 2020 */}
            <Typography variant="h2" className={classes.mainText}>
              Placement ~ 2019 - 2020
            </Typography>
            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Prateek}
                  mainText="CSE"
                  name="Prateek Tripathi"
                  package="4.0 LPA"
                  text="Company: Cognizant"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Harshit}
                  mainText="CSE"
                  name="Harshit Sharma"
                  package="4.0 LPA"
                  text="Company: Iterate India Pvt Ltd."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Ayushi}
                  mainText="CSE"
                  name="Ayushi Singhal"
                  package="2.1 LPA"
                  text="Company: Cloud Analogy"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Shivam}
                  mainText="CSE"
                  name="Shivam"
                  package="2.1 LPA"
                  text="Company: Excellence Technologies"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Anita}
                  mainText="CSE"
                  name="Anita Khanal"
                  package="2.1 LPA"
                  text="Company: Cinfinite Technologies"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Tushar}
                  mainText="CSE"
                  name="Tushar"
                  package="2.0 LPA"
                  text="Company: 2.	Risersoft"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Anuj}
                  mainText="CSE"
                  name="Anuj Kumar"
                  package="2.0 LPA"
                  text="Company: Risersoft"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Mayank}
                  mainText="CSE"
                  name="Mayank Tyagi"
                  package="2.0 LPA"
                  text="Company: 360 Degree Cloud"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Rahul}
                  mainText="CSE"
                  name="Rahul Saini"
                  package="2.0 LPA"
                  text="Company: Risersoft"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Shristhi}
                  mainText="CSE"
                  name="Shristhi Rathi"
                  package="2.0 LPA"
                  text="Company: Saral ERP Pvt Ltd"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Aman}
                  mainText="CSE"
                  name="Aman Ahuja"
                  package="2.0 LPA"
                  text="Company: Dayal Infotech"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Aaushi}
                  mainText="CSE"
                  name="Aaushi Upadhyay"
                  package="2.6 LPA"
                  text="Company: HCL Technology Ltd."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Esha}
                  mainText="CSE"
                  name="Esha"
                  package="1.44 LPA"
                  text="XYZ Company: Vijay Enterprises"
                />
              </Grid>
            </Grid>
            {/* SESSION 2015 - 2019 */}
            <Typography variant="h2" className={classes.mainText}>
              Placement ~ 2018 - 2019
            </Typography>
            <Grid container spacing={3} direction="row" justifyContent="center">
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Prachi}
                  mainText="CSE"
                  name="Prachi Kaushik"
                  package="3.50 LPA"
                  text="Company: Wipro"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Nitin}
                  mainText="CSE"
                  name="Nitin Sharma"
                  package="3.37 LPA"
                  text="Company: TCS(TATA CONSULTANCY SERVICES) "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Ashish}
                  mainText="Ashish"
                  name="Ashish Bansal"
                  package="3.6 LPA"
                  text="Company: 360 DEGREE CLOUD TECHNOLOGIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Rakhi}
                  mainText="CSE"
                  name="Rakhi Rana"
                  package="1.0 LPA"
                  text="Company: NEOTECH SYSTEMS PVT.LTD "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Aayush}
                  mainText="CSE"
                  name="Aayush Kumar Saini"
                  package="2.40 LPA"
                  text="Company: INGENIOUS CORPORATE SOLUTIONS PVT. LTD. "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Avdhesh}
                  mainText="CSE"
                  name="Avdhesh Kumar"
                  package="2.4 LPA"
                  text="Company: EXTRAMARKS EDUCATION INDIA PRIVATE LIMITED"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Krishna}
                  mainText="CSE"
                  name="Krishna Kant Marandi"
                  package="2.20 LPA"
                  text="Company: E2E RESEARCH SERVICES PVT LTD"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Ankush}
                  mainText="CSE"
                  name="Ankush Sharma"
                  package="3.6 LPA"
                  text="Company: INGENIOUS CORPORATE SOLUTIONS PVT. LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Himanshu}
                  mainText="CSE"
                  name="Himanshu Dixit"
                  package="3.6 LPA"
                  text="Company: INGENIOUS CORPORATE SOLUTIONS PVT. LTD."
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Deepak}
                  mainText="CSE"
                  name="Deepak Goswami"
                  package="2.4 LPA"
                  text="Company: MOBILOITTE TECHNOLOGIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Sanjay}
                  mainText="CSE"
                  name="Sanjay Singh"
                  package="1.80 LPA"
                  text="Company: MOBILOITTE TECHNOLOGIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Mahak}
                  mainText="CSE"
                  name="Mahak Bansal"
                  package="1.80 LPA"
                  text="Company: GISCO - GUJRAL INDUSTRIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Aditya}
                  mainText="CSE"
                  name="Aditya Shandilya"
                  package="1.80 LPA"
                  text="Company: GISCO - GUJRAL INDUSTRIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Nuzhat}
                  mainText="CSE"
                  name="Nuzhat"
                  package="1.80 LPA"
                  text="Company: GISCO - GUJRAL INDUSTRIES "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Shubham}
                  mainText="CSE"
                  name="Shubham Tayal"
                  package="1.44 LPA"
                  text="Company: ACCOUNTS SOLUTRATE "
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Huzaifa}
                  mainText="CSE"
                  name="Huzaifa Khan"
                  package="3.37 LPA"
                  text="Company: TCS(Tata Consultancy Services)"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Arpit}
                  mainText="CSE"
                  name="Arpit Sharma"
                  package="- LPA"
                  text="Company: IBM(International Business Machines Corporation)"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Rishabh}
                  mainText="CSE"
                  name="Rishabh Dixit"
                  package="- LPA"
                  text="Company: Capgemini Technology Services India Limited"
                />
              </Grid>
              <Grid items lg={3} md={3} sm={6} xs={12}>
                <Card
                  img={Ashish_Sharma}
                  mainText="CSE"
                  name="Ashish Sharma"
                  package="- LPA"
                  text="Company: ERICSSON
                  (Consultant INST P)
                  "
                />
              </Grid>
            </Grid>
          {/* </Box> */}
        </Container>
      </Box>
    </>
  );
}

export default Placement;
