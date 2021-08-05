import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OrangeBtn from "../../../../common/Btns/OrangeBtn";
import image from '../../../../assets/images/slide.jpg'

const useStyles = makeStyles((theme) => ({
  gridContent: {
    position: "absolute",
    top: 45,
    left: 45,
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      top: 10,
      left: 15,
    },

    
  },
  imgRight: {
    maxWidth: "100%",
    height: "auto",
    position: "relative",
  },

  paper: {
    position: "relative",
    height: 420,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: "center",
      
    },
    
  },
  imgCenter: {
    position: "relative",
    
  },
}));

// 
export default function Item({
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
  bgPosition = "right",
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
      style={{ position: "relative", overflow: "hidden"
}}
    >
      {/* <div style={{    width: '100%',height: "100%",position: 'absolute',backgroundColor: "rgba(223,224,225,.75)", zIndex: 2}}> */}
        <Paper
          className={classes.paper}
          style={{ height: gridheight,backgroundColor:bgcolor, backgroundImage: `url(${image})`, backgroundPosition:"left",backgroundSize:"cover"}}
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
          {/* <img className={classes.imgRight} src={image} />
          <img className={classes.imgCenter} src={imageCenter} />  */}
        </Paper>
      {/* </div> */}
    </Grid>
  );
}
