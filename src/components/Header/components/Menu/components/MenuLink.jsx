import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';
import {NavLink} from 'react-router-dom' 

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
        color:theme.palette.secondary.contrastText,
        padding:0,
        textTransform:"uppercase",
        "&:hover": {
            color:theme.palette.primary.main,
        },

    }
    
  

}));

export default function MenuLink({ 
  text,
  link
  })  {
  const classes = useStyles();
  
  const handleClick = (event) => {
    console.log('asdasdasd');
  }
  return (
    <Grid item>
        <Link to={link} className={classes.menuLink} onClick={handleClick} underline="none" component="a">{text}</Link>
    </Grid>
  );
};
