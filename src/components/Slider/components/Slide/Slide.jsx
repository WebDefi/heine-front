import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OrangeBtn from "../../../../common/Btns/OrangeBtn";
import image from "../../../../assets/images/slide.jpg";

const useStyles = makeStyles((theme) => ({
  gridContent: {
    position: "absolute",
    top: 45,
    left: 45,
    zIndex: 3,
  },
  paper: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    overflow: "hidden",
    height: 420,
    zIndex: 2,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  imgCenter: {
    position: "relative",
  },
}));

export default function Slide({
  sizeXs = 12,
  sizeSm,
  sizeMd,
  sizeXl,
  sizeLg,
  title,
  children,
  image,
  bgcolor = "#DEE1E1",
  contrast = "#fff",
  gridheight = 420,
  subtitle,
  bigTitle,
  imageCenter,
  contrastTitle,
  sliderImg,
  justify = "center",
}) {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={sizeXs}
      sm={sizeSm}
      md={sizeMd}
      xl={sizeXl}
      lg={sizeLg}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Paper
        className={classes.paper}
        style={{ height: gridheight, backgroundImage: `url(${image})` }}
      >
        <div className={classes.gridContent}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5" style={{ color: contrast }}>
            {contrastTitle}
          </Typography>
          <Typography variant="h2" style={{ color: contrast }}>
            {bigTitle}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: contrast, paddingTop: 5 }}
          >
            {subtitle}
          </Typography>
          {children}
        </div>
      </Paper>
    </Grid>
  );
}
