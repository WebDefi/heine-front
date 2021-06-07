import React from 'react';
import { Grid } from '@material-ui/core';
 
 
 

export default function Adress({ 
  size = 6, 
  children 
  })  {
 
  return (
    <Grid item xs={size} style={{paddingTop:50}}>
      <div>
         {children}
      </div>
    </Grid>
  );
};
