import React from 'react';
import logo from '../../../../assets/images/Logo.svg'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logoStyles: {
      height:"100%",
      position:'relative',
      transition: '0.4s linear',
      top:3,
      [theme.breakpoints.down('sm')]: {
        height:70,
        top:14,
        transform: "scale(1)",
      },
      [theme.breakpoints.down('xs')]: {
        height:70,
        top:24,
        transform: "scale(1)",
      },
      
    }, 
  }));

export default function Logo () {
    const classes = useStyles();
      return <Link to="/"><img className={classes.logoStyles} src={logo}></img></Link>
} 
