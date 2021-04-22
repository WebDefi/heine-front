import React from 'react';
import { Button, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';
 

const useStyles = makeStyles(theme => ({
    localBtn: {
        color:"#fff",
        padding:0,
        "&:hover": {
            color:theme.palette.primary.main,
        },

    }
    
  

}));

export default function LocalItem({ 
  text,
  })  {
  const classes = useStyles();
  return (
    <Grid item>
        <Button className={classes.localBtn}>{text}</Button>
    </Grid>
  );
};
