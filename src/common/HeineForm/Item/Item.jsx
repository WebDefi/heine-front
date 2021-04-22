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
    
  

}));

export default function Item({ size = 12, title, children, image,buttonText})  {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
      <Paper className={classes.paperOrange}> 
        <img className={classes.imgRight} src={image}/>
        
      </Paper>
    </Grid>
  );
};
