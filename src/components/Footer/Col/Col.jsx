import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 

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

export default function Form({
  sizeXs = 12, 
  sizeSm = 6,
  sizeMd = 2,
  title, 
  children, 
  primary="#F84F06",
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={sizeXs} sm={sizeSm} md={sizeMd}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="subtitle2" style={{color:primary, fontSize:18}}>{title}</Typography>
              {children}
          </Grid>
        </Grid>
    </Grid>
  );
};
