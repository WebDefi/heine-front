import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
 

const useStyles = makeStyles(theme => ({
    menuLink: {
        color:"#fff",
        padding:0,
        textTransform:"uppercase",
        "&:hover": {
            color:theme.palette.primary.main,
        },

    }
    
  

}));

export default function Item({ 
  text,
  link
  })  {
  const classes = useStyles();
  return (
    <Grid item>
         
        <Link to={link} className={classes.menuLink} underline="none">{text}</Link>
    </Grid>
  );
};
