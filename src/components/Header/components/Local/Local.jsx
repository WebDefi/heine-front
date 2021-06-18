import React from 'react';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import LocalItem from './components/LocalItem'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dnone: {
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  }
}));

export default function Menu(){
  const classes = useStyles();
  return(
    <Grid item>
      <Grid container justify="center" alignItems="center" spacing={1}>
         <LocalItem text="RU"></LocalItem>
            <Grid item className={classes.dnone}>|</Grid>
         <LocalItem text="UA"></LocalItem>
      </Grid>
    </Grid>
  );
};
