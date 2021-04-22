import React from 'react';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import LocalItem from './components/LocalItem'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Menu(){
  return(
    <Grid item>
      <Grid container justify="center" alignItems="center" spacing={1}>
         <LocalItem text="RU"></LocalItem>
            <Grid item>|</Grid>
         <LocalItem text="UA"></LocalItem>
      </Grid>
    </Grid>
  );
};
