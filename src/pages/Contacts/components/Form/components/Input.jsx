import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function Input({ 
    size = 6, 
    placeholder,
    article
    
    })  {
   
    return (
        <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
        <Typography variant="subtitle2">{article}</Typography>
          <TextField size="small"  variant="outlined" fullWidth placeholder={placeholder}/>
        </Grid>
    );
  };
  