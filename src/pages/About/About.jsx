import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './components/Item'
 

const useStyles = makeStyles(theme => ({
  
    
}));

export default function About() {
  const classes = useStyles();
  return (
    <Grid container justify="center"  style={{marginTop:120,padding:"120px 0"}}>
        <Item size="2" title="About-Component" />
    </Grid>
  );
};
