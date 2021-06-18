import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/input'
import NameForm from '../../../common/FooterInput/NameForm'
 

export default function Form({ 
  sizeXs = 12,
  sizeSm = 12, 
  sizeMd = 3,
  title, 
  children, 
  contrast="#fff",
  })  {
 
  return (
    <Grid item xs={sizeXs} sm={sizeSm} md={sizeMd}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          
            <Grid item>
              <Typography variant="h6" style={{color:contrast,marginBottom:"30px"}}>{title}</Typography>
            </Grid>
            <Grid item style={{display:"flex", justifyContent:"center"}}>
              <NameForm />
            </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
};
