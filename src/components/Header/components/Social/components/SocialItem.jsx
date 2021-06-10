import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
 

const useStyles = makeStyles(theme => ({
    headerLink: {
        color:theme.palette.secondary.contrastText,
        "&:hover": {
            transition: "all 0.3s ease",
            color:theme.palette.primary.main
        }
    }
    
  

}));

export default function SocialItem({ 
  children, 
  link,
  height
  })  {
  const classes = useStyles();
  return (
    <Grid item style={{height:height}}>
        <a href={link}  className={classes.headerLink}>{children}</a>
    </Grid>
  );
};
