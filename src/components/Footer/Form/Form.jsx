import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/input'
import NameForm from '../../../common/FooterInput/NameForm'
 

export default function Form({ 
  size = 12, 
  title, 
  children, 
  contrast="#fff",
  })  {
 
  return (
    <Grid item xs={size}>
        <Typography variant="h6" style={{color:contrast,marginBottom:"30px"}}>{title}</Typography>
         <NameForm />
    </Grid>
  );
};
