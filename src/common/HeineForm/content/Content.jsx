import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  gridContent: {
      position: "absolute",
      top: 45,
      left: 45,
      zIndex: 3,
    },
    
  

}));

export default function Content({ size = 6, article,children, image})  {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
        <div>
            <img src={image}></img>
            {/* <Typography variant="body2" component="p">{article}</Typography> */}
            {children}
            {/* <Distr/> */}
        </div>
    </Grid>
  );
};
