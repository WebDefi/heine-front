import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './components/MainScreen'
import AboutImg from '../../assets/images/About.png'

import MainScreen from './components/MainScreen'
import AboutCards from './components/AboutCards'

const useStyles = makeStyles(theme => ({
  aboutWrap: {
    position: "relative",
    width: "100%",
    height: "20em",
    display: "flex",
    flexFlow: "column",
    overflow: "hidden",
    color: "#fff",
  },
  medigran:{
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
  },
  heine: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    clipPath: "polygon(100% 100%, 100% 0, 0 0)",
  },
  medigran: {
    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
  },
  medigranBlock: {
    position: "relative",
    width: "100vw",
    height: "20em",
    display: "flex",   
  },
  heineBlock:{
    position: "relative",
    width: "100vw",
    height: "20em",
    display: "flex", 
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundImage: "url('https://www.heine.com/fileadmin/_processed_/a/a/csm_HEINE-products-keyvisual_238fac7421.png')",   
  },
  medigranBlock:{
    position: "relative",
    width: "100vw",
    height: "20em",
    display: "flex", 
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundImage: "url('https://www.heine.com/fileadmin/_processed_/a/a/csm_HEINE-products-keyvisual_238fac7421.png')",
    backgroundRepeat:"no-repeat"
     
  },
  
  medigranFilter:{
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.4,
  },
  heineFilter:{
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.4,
  },
  heineFilter:{
    backgroundColor: "#b8551f",
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.3,
  },
  medigranFilter:{
    backgroundColor: "#4e98f4",
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.3,
    
  },

  medigranContent:{
    position: "relative",
    zIndex: 3,
    background: "rgba(0, 159, 253, 0.5)",
    backdropFilter: "blur(22px)",
    padding:"20px 700px 20px 20px",
    width:"100vw",
  },
  heineContent: {
    position: "relative",
    zIndex: 4,
    padding:"20px 20px 20px 700px",
    background: "rgba(238, 95, 34, 0.4)",
    backdropFilter: "blur(22px)",
    width:"100vw",
  }
  
}));

export default function About() {
  const classes = useStyles();
  return (
    <Grid container>
      <MainScreen /> 
      <AboutCards /> 
    </Grid>
  );
};
