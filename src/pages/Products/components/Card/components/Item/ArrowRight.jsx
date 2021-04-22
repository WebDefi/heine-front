import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import arrowRight from '../../../../../../assets/images/arrowRight.svg' 


const useStyles = makeStyles(theme => ({
    arrowRight: {
        "&:hover": {
            stroke:"#F84F06"
        }
    }
    
  

}));

export default function ArrowRight({ display = "block" })  {
  const classes = useStyles();
  return (
     
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" display={display}>
        <path d="M12.5 5L19.5 12L12.5 19" className={classes.arrowRight}  stroke="#636364" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
   
    
  
  );
};

        