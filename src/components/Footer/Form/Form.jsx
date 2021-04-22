import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/input'

 

export default function Form({ 
  size = 12, 
  title, 
  children, 
  contrast="#fff",
  })  {
 
  return (
    <Grid item xs={size}>
        <Typography variant="h6" style={{color:contrast}}>{title}</Typography>
         <Input placeholder="Ваш Е-мейл"/>
    </Grid>
  );
};
