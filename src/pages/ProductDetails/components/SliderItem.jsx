import React from "react";
import { Grid, Button, Typography, Paper, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop:50,
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
    marginRight:20,
    
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
    width: "100%",
    height: 62,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C1C4C5",
    borderRadius: 8,
    "&:hover": {
      border: theme.palette.mainBtnBorder.main,
      },
    },
}))
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
    <Grid item xs={size} className={classes.slideOverflow}>
      <Paper
        className={classes.paper}
        style={{ background: "none", height: gridheight }}
      >
        <img className={classes.imgCenter} src={imageCenter} />
        
          <img className={classes.slide} src={slide} />
       
      </Paper>
    </Grid>
  );
}
