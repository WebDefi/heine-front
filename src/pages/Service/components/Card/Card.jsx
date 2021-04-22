import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(theme => ({
   cardContent: {
        position: "absolute",
        bottom: 0,
        zIndex: 3,
        background: '#f1f1f1',
         
        "&:hover": {
            borderTop:"1px solid #EE5F22",

          },
   },
   categoryBlock: {
        borderRadius: "0 20px 0 0",
        height:250,
        position: "relative",
        display:"flex",
        justifyContent:"flex-start",
        overflow: "hidden",
        marginTop: theme.spacing(1),
        background:"#444",
        
        border:"1px solid #444",
        "&:hover": {
            border:"1px solid #EE5F22",
            background:"#EE5F22",
          }
   },
    
   categoryContentText: {
        margin:"25px 40px",
   }
  

}));

export default function Card({ 
  size = 6, 
  title, 
  children, 
  subtitle,
  image,
  link,
  })  {
  const classes = useStyles();
  return (
 
 
        <Grid item xs={size}>
            <Link to="{link}" href="{link}">
                <Paper className={classes.categoryBlock}>
                <Typography variant="h2" style={{position:"absolute",top:"15%",  }}>{title}</Typography>
                {children}
                </Paper>
            </Link>
        </Grid>
  ); 
}         