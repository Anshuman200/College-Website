import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Image from "../Components/alumin.jpg";

const useStyle = makeStyles({});

function Alumni() {
  const classes = useStyle();
  return (
    <Box>
      <img src={Image} alt="Image" />
      <Container maxWidth="sm">
        <Grid>
          <Typography>
            Dewan VS Group of Institutions, believe that strengthening the
            alumni relations provides support not only to our students as a good
            resource for their career progression but also as the brand
            ambassadors to the outside world. As an alumni, the ex-students also
            get lifelong career support from the institutes itself, by the grace
            of corporate networking of the institution. The Dewan VS Group,
            alumni have helped the legacy of this institution and have done us
            proud through the accolades they have won in the corporate world.
            This section of the website provides Alumni – Network with a
            platform to stay in touch with the whole fraternity of institutions
            and to stay connected with their Alma mater.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}

export default Alumni;
