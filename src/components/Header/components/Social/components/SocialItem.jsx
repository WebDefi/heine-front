import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
 

const useStyles = makeStyles(theme => ({
    headerLink: {
        color:"#fff",
        "&:hover": {
            color:theme.palette.primary.main
        }
    }
    
  

}));

export default function SocialItem({ 
  children, 
  link,
  })  {
  const classes = useStyles();
  return (
    <Grid item>
        <Link to={link} href={link} className={classes.headerLink}>{children}</Link>
    </Grid>
  );
};
