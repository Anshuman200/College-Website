import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Logo from "../Home/images/logo.png";

const useStyle = makeStyles({
  topSection: {
    background: "#97bf9b",
    borderBottom: "1px solid grey",
    display: "block",
    margin: "auto",
    padding: "5px",
    maxWidth: "100%",
    "@media(min-width:401px) and (max-width:650px)": {
      "& img": {
        paddingTop: "5px",
        lineHeight: "30px",
        fontSize: "18px",
        paddingBottom: "5px",
        maxWidth:"70%"
      },
    },
    "@media(min-width:200px) and (max-width:400px)": {
      "& img": {
        paddingTop: "5px",
        lineHeight: "30px",
        fontSize: "18px",
        paddingBottom: "5px",
        maxWidth:"70%"
      },
    },
  },
});

function Topbar() {
  const classes = useStyle();
  return (
    <Box className={classes.topSection}>
      <Box>
        <img src={Logo} alt="Logo" />
      </Box>
    </Box>
  );
}

export default Topbar;
