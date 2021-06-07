import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrangeBtn from '../../../../common/Btns/OrangeBtn'

const useStyles = makeStyles(theme => ({
  gridContent: {
      position: "absolute",
      bottom: 45,
      left: 45,
      right: 10,
      zIndex: 3,
    },
    imgRight: {
      maxWidth:"100%",
      height:"auto",
      position: "relative",
      
    },
    
      paper: {
        position: "relative",
        display:"flex",
        justifyContent:"flex-end",
        alignItems: "flex-end",
        overflow: "hidden",
        height: 420,
      },
      imgCenter: {
        position: "relative",
        maxWidth:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        height:"auto",
         
      },
       
    
  

}));

export default function BottomGrid({ 
  size = 12, 
  title, 
  children, 
  image, 
  bgcolor="#DEE1E1", 
  contrast="#fff",
  gridheight=420, 
  subtitle,
  bigTitle,
  imageCenter,
  contrastTitle,
  slideImg,
  justify = "center"
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={size} style={{position:"relative",overflow:"hidden"}}>
      <Paper className={classes.paper} style={{background:bgcolor,height:gridheight}}> 
      <div className={classes.gridContent}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5" style={{color:contrast}}>{contrastTitle}</Typography>
        <Typography variant="h2" style={{color:contrast}}>{bigTitle}</Typography>
        <Typography variant="body1" style={{color:contrast,margin:'10px 0'}}>{subtitle}</Typography>
          {children}
      </div>
      <img className={classes.imgRight} src={image}/>
      <img className={classes.imgCenter} src={imageCenter}/>
      <img className={classes.slideContainer} src={slideImg}></img>
      </Paper>
    </Grid>
  );
};
