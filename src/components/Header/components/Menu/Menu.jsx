import React from 'react';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MenuLink from "./components/MenuLink"


export default function Menu(){
  return(
    <Grid item>
      <Grid container justify="center" spacing={1}>
        <Router>
            <MenuLink link="/products" text="Продукция"/>
            <MenuLink link="/" text="Аксессуары"/>
            <MenuLink link="/" text="Новости"/>
            <MenuLink link="/" text="Сервис"/>
            <MenuLink link="/" text="Контакты"/>    
            {/* <Link to="/" href="/" style={{color:"#fff", margin:"0 5px"}}>Menu item 1</Link> 
            <Link to="/" href="/" style={{color:"#fff", margin:"0 5px"}}>Menu item 1</Link> 
            <Link to="/Contacts" style={{color:"#fff", margin:"0 5px"}}>Contacts</Link>   */}
        </Router>
      </Grid>
    </Grid>
  );
};