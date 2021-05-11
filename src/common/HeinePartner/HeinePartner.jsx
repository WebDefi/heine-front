import React from 'react';
import { Grid, Link, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heinePartner from '../../assets/images/heinePartner.svg'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';

const useStyles = makeStyles(theme => ({
  wrapper:{
    right:0,
    position:"absolute",
  
  },
  blue:{
    
    right:3,
    top:43,
    position:"absolute",
     
    height: 49,
    background: "rgba(0, 159, 253, 0.9)",
    borderRadius: "40px 0 0 40px",
     
  },
  yellow:{
     
    right:3,
    top:55,
    position:"relative",
     
    height: 49,
    background: "rgba(254, 197, 43, 0.9)",
    borderRadius: "40px 0 0 40px",
    
  },
  white: {
   
    position:"relative",
 
    height: 49,
    background: "#fff",
    borderRadius: "40px 0 0 40px",
  },
  content:{
       position:"relative",
       top:5,

  }

}));

export default function ProductDetails({blueSize="806px",whiteSize="800px",yellowSize="806px"})  {
  const classes = useStyles();
  return (
    <Grid item>
      <div className={classes.wrapper}>
        <div className={classes.blue} style={{width:blueSize}}></div>
        <div className={classes.yellow} style={{width:whiteSize}}></div>
        <div className={classes.white} style={{width:yellowSize}}>
            <Grid container alignItems="center" justify="center" className={classes.content}>
               <Grid item style={{paddingRight:20}}>
                <Typography >Официальный представитель Heine в Украине</Typography>
               </Grid>
                <Grid item style={{paddingLeft:20}}>
                    <img src={heinePartner}></img>
                </Grid>
            </Grid>
        </div>
      </div>
    </Grid>
  );
};
