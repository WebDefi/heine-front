import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrangeBtn from '../../../../common/Btns/OrangeBtn'

const useStyles = makeStyles(theme => ({
  gridContent: {
      position: "absolute",
      top: 45,
      left: 45,
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
        height:"auto",
        bottom:0,
      }
    
  

}));

export function Privacy({ 
  size = 12, 
  title, 
  children, 
  contrast="#fff",
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
      <div className={classes.gridContent}>
        <Typography variant="h6" style={{color:contrast}}>{title}</Typography>
          {children}
      </div>
    </Grid>
  );
};
