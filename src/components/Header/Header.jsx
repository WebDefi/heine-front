import React from 'react';

import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/Logo.svg'
import Social from './components/Social/Social'
import Local from './components/Local/Local'
import MainMenu from '../../common/Menu/MainMenu'
import MenuLink from '../Header/components/Menu/components/MenuLink'

import './Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Header() {
    return (
      <div>
       <AppBar color="secondary"  position="fixed" className='header'>
         <Toolbar> 
             <Grid container justify="space-around" alignItems="center">
               <Logo />
               
               <Grid item>
                <Grid container justify="center" spacing={2}>
                  <Router>
                  <MenuLink link="/products" text="Продукция"/>
                  <MenuLink link="/" text="Аксессуары"/>
                  <MenuLink link="/news" text="Новости"/>
                  <MenuLink link="/service" text="Сервис"/>
                  <MenuLink link="/contacts" text="Контакты"/> 
                  </Router>
    
              
                </Grid>
               </Grid>
               <Social/>
               {/* <Local /> */}
             </Grid>
            
         </Toolbar>
       
        </AppBar>
        
      {/* <MainMenu /> */}
     </div>
    );
  }







// export default function Header()  {
//   const classes = useStyles();
//   return (
//     
//   )
// };

 