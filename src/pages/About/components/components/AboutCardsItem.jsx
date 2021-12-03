import React from "react";
import { Grid, TextField, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import people from "../../../../assets/images/1.svg";
import sec from "../../../../assets/images/2.svg";
import th from "../../../../assets/images/3.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#fafafa",
    boxShadow: "0px 20px 20px rgb(0 0 0 / 5%)",
    position: "relative",
    display: "inline-block",
    color: "#000000",
    paddingLeft: "2.50em",
    paddingRight: "2.80em",
    paddingTop: "0.76em",
    paddingBottom: "0.76em",
    mineight: "5.00em",
    borderRadius: 16,
    margin: "0 20px",
    height: "160px",
  },
}));

export default function AboutCardItem({
  firstCardText = "Професіоналів",
  secondCardText = "Років ми працюємо на ринку ",
  thirdCardText = "Партнерів по всьому світу",
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={4}
      style={{ margin: "40px 0" }}
    >
      <Grid item xs={12} sm={3} className={classes.card}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <img height="60px" src={people}></img>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Typography variant="h3" style={{ color: "#FAC415", paddingTop:5}}>
                40+
              </Typography>
            </Grid>
            <Typography>{firstCardText}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.card}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <img style={{ textAlign: "center" }} src={sec}></img>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Typography variant="h3" style={{ color: "#FAC415", paddingTop:10}}>
                40+
              </Typography>
            </Grid>
            <Typography>{secondCardText}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.card}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <img src={th}></img>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center" alignItems="center">
              <Typography variant="h3" style={{ color: "#FAC415", paddingTop:5 }}>
                40+
              </Typography>
            </Grid>
            <Typography>{thirdCardText}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
