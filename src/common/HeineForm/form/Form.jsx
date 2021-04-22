import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  form: {
    height: 'auto',
    backgroundColor:theme.palette.white.main,
    padding:45,
    dispay:'flex',
    justifyContent:'center',
    textAlign:"center"
    },
    
  

}));

export default function Form({ size = 6, children, title, subtitle1,subtitle2})  {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
        <div className={classes.form}>
            <Typography variant="h5" component="h5">{title}</Typography>
            <Typography variant="body2" component="p">{subtitle1}</Typography>
            <Typography variant="body2" component="p">{subtitle2}</Typography>
            {children}
            {/* <Distr/> */}
        </div>
    </Grid>
  );
};
