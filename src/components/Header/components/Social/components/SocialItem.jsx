import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    headerLink: {
        cursor:'pointer',
        color:theme.palette.secondary.contrastText,
        "&:hover": {
            transition: "all 0.3s ease",
            color:theme.palette.primary.main
        },
        [theme.breakpoints.down("sm")]: {
          display:"none",
        },
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
        <Link to={link}  className={classes.headerLink}>{children}</Link>
    </Grid>
  );
};
