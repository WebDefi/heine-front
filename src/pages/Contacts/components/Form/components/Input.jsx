import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function Input({ 
    size = 6, 
    placeholder,
    article
    
    })  {
   
    return (
        <Grid item xs={size}>
        <Typography variant="subtitle2">{article}</Typography>
          <TextField size="small"  variant="outlined" fullWidth placeholder={placeholder}/>
        </Grid>
    );
  };
  