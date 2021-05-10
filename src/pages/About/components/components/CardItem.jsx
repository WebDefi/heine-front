import React from 'react';
import { Grid, TextField, Typography,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import movement from '../../../../assets/images/movement.jpg'
 
const useStyles = makeStyles(theme => ({
  boxLetter: {
    color:" #467bc9",
    fontSize: "4.00em",
    fontWeight: "900",
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: "0.18em",
    marginTop: "-0.80em",
  },
  boxIndex: {
    textTransform: "uppercase",
    textShadow:" 0 0 1px #467bc9, 0 0 2px #467bc9",
    color:"#fff",
    fontSize:"2.25em",
    marginRight:"0.28em",
    fontWeight: 700,

  },
  boxContent: {
    background:"#fff",
    position:"absolute",
    bottom:0,
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    paddingTop: "0.20em",
    paddingBottom: "0.20em",
    paddingLeft: "1.30em",
    paddingRight: "1.30em",
  },
  boxContainer: {
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    
  },
  boxSubtitle:{
      color:theme.palette.secondary.main,
        '&::fist-letter':{
            color: "#467bc9",
        }
  },
  
}));

export default function CardItem({size = 6,margin = 10}) {
  const classes = useStyles();
  return (
    <Grid item xs={size} style={{marginTop:margin}}>
        <Box className={classes.boxContainer}>
            <img  src={movement} />
           
            <Box className={classes.boxContent}>
            <span className={classes.boxLetter}>M</span>
                <Typography variant="subtitle1" className={classes.boxIndex}>01</Typography>
                <Box>
                    <Typography variant="subtitle2" className={classes.boxSubtitle}>Movement:</Typography>
                    <Typography variant="body2">Движение - мы всегда движемся вперед</Typography>
                </Box>
                
            </Box>   
        </Box>    
    </Grid>
  );
};
