import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../../../../theme';

const useStyles = makeStyles(theme => ({
  main: {
    borderRadius: '0 20px 0 0',
    "&:hover": {
      border: theme.palette.mainBtnBorder.main,
      transition: "all 0.3s ease",
    }
  },
  categoryBlock: {
    borderRadius: '0 20px 0 0',
    height: 230,
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
    background:theme.palette.secondary.main,
    borderBottom:theme.palette.borderMain.main,
    '&:hover': {
      transition: 'all 0.3s ease',
      border: theme.palette.mainBtnBorder.main,
      background: theme.palette.primary.main,
    }
  },
  categoryContent :{
    border:theme.palette.secondary.secondaryBorder,
  },
  categoryContentText: {
    margin:'10px 20px',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: 'all 0.3s ease',
    }

  }



}));

export default function Card({ 
  

  size = 6, 
  title, 
  children, 
  subtitle,
  image,
  article,
  link,
  })  {
  const classes = useStyles();
  return (
 
 
        <Grid item xs={size}>
            <a href="{link}" >
                <div className={classes.main}>
                  <Paper className={classes.categoryBlock}>
                  {children}
                  <Typography variant="h2" style={{position:"absolute",color:"#fff", margin:'2rem'}}>{title}</Typography>
                  </Paper>
                  <div  className={classes.categoryContent}>
                    <Typography variant="subtitle1" className={classes.categoryContentText}>{title}</Typography>
                    <Typography variant="body2" style={{margin:"10px 20px"}}>{subtitle}</Typography>
                  </div>
                </div>
                
            </a>
        </Grid>
  ); 
}         