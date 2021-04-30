import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Products from '../../../../pages/Products/Products'
 
import MenuLink from "./components/MenuLink"
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
      <Grid container justify="center" spacing={2}>
            <Router>
              <MenuLink link="/products" text="Продукция"/>
              <MenuLink link="/" text="Аксессуары"/>
              <MenuLink link="/news" text="Новости"/>
              <MenuLink link="/service" text="Сервис"/>
              <MenuLink link="/contacts" text="Контакты"/> 
            </Router>

            {/* <Link to="/" href="/" style={{color:"#fff", margin:"0 5px"}}>Menu item 1</Link> 
            <Link to="/" href="/" style={{color:"#fff", margin:"0 5px"}}>Menu item 1</Link> 
            <Link to="/Contacts" style={{color:"#fff", margin:"0 5px"}}>Contacts</Link>   */}

      </Grid>
    </Grid>
  );
};