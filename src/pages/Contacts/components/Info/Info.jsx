import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 

const useStyles = makeStyles(theme => ({
   
    
  

}));

export default function Info({ 
  size = 6,  
  subtitle1,
  subtitle2,
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
      <div>
        <Typography variant="body1">{subtitle1}</Typography>
        <Typography variant="body1">{subtitle2}</Typography>
      </div>
    </Grid>
  );
};
