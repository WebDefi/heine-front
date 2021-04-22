import React from 'react';
import logo from '../../../../assets/images/Logo.svg'
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logoStyles: {
      height:"100%",
      position:'absolute',
      top:0
    }, 
  }));

export default function Logo () {
    const classes = useStyles();
    return (
        <Link href="/">
            <img className={classes.logoStyles} src={logo}></img>
        </Link>
    );
} 
