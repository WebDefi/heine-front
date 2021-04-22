import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles(theme => ({
  slide: {
        position: "relative",
        display:"flex",
        justifyContent:"center",
        alignItems: "flex-end",
        overflow: "hidden",
        height: 500,
        background:"#E0E3E2",
        
  },
  imgSlide: {
        backgroundPosition: "center",
        display:"block"
  }
    
  

}));

export default function Slide({ 
  image,title,subtitle,contrast="#fff"
  })  {
  const classes = useStyles();
  return (
    <Paper className={classes.slide}>
        <img src={image} className={classes.imgSlide}></img>
        <div className={classes.gridContent}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2" style={{color:contrast,paddingTop:5}}>{subtitle}</Typography>
        </div>
    </Paper>
  );
};
