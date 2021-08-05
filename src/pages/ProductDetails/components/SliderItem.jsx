import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    overflow: "hidden",
    height: 420,
  },
  imgCenter: {
    position: "relative",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    borderRadius: 10,
    "&:hover": {
      border: theme.palette.mainBtnBorder.main,
    },
  },
  slide: {
    width: "auto",
    height: 78,
  },
  slideBox: {
    background: "#fff",
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C1C4C5",
    borderRadius: 8,
    "&:hover": {
      border: theme.palette.mainBtnBorder.main,
    },
  },
}));

export default function SliderItem({
  size = 12,
  bgcolor = "#DEE1E1",
  gridheight = "100%",
  imageCenter,
  slides,
  slide,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={size} style={{ position: "relative", overflow: "hidden" }}>
      <Paper
        className={classes.paper}
        style={{ background: "none", height: gridheight }}
      >
        <img className={classes.imgCenter} src={imageCenter} />
        <div className={classes.slideBox}>
          <img className={classes.slide} src={slide} />
        </div>
      </Paper>
    </Grid>
  );
}
