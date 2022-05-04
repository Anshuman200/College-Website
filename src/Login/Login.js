import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper, Box } from "@material-ui/core";
import Sign from "../Sign/Sign";
import login from '../Login/images/login.jpg'

const useStyles = makeStyles((theme) => ({
  imgSection: {
    backgroundImage: "url(" + login + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom:"4em",
    position:'relative',
    display:"block",
    margin:"auto",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px",
    height: "70vh",
    width: "280",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Box className={classes.imgSection}>
      <Container component="main" maxWidth="xs">
      <Grid style={{ padding: "35px 5px 0 5px" }}>
        <CssBaseline />
        <Paper elevation={10} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            {/* <form className={classes.form} noValidate> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Username"
                  placeholder="username"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  placeholder="password"
                  type="password"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I Agree all terms &amp; conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid>
                <Link href="#" variant="body2">
                  Forget Password ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign" variant="body2">
                  Didn't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        </Grid>
      </Container>
    </Box>
  );
}
