import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

export default function Item({ 
  size = 12, 
  title, 
  children, 
  contrast="#fff",
  })  {
 
  return (
    <Grid item xs={size}>
        <Typography variant="h6">{title}</Typography>
    </Grid>
  );
};
