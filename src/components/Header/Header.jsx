import React from 'react';

import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/Logo.svg'
import Social from './components/Social/Social'
import Local from './components/Local/Local'


const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom:'8px solid #F1F1F1',
  },    
}));

export default function Header()  {
  const classes = useStyles();
  return (
    <AppBar color="secondary"  position="fixed" className={classes.header}>
        <Toolbar> 
            <Grid container justify="space-around" alignItems="center">
              <Logo />
              <Menu />
              <Social/>
              {/* <Local /> */}
            </Grid>
        </Toolbar>
    </AppBar>
  )
};

 