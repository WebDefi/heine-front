import React from 'react';
import { Button, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';
 

const useStyles = makeStyles(theme => ({
    localBtn: {
        color:theme.palette.secondary.contrastText,
        padding:0,
        "&:hover": {
            transition: "all 0.3s ease",
            color:theme.palette.primary.main,
        },
        [theme.breakpoints.down("sm")]: {
          display:"none",
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
