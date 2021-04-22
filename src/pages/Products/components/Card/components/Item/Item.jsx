import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from  './ArrowRight'


const useStyles = makeStyles(theme => ({
   cardContent: {
        borderTop:"1px solid #C1C4C5",
        position: "absolute",
        bottom: 0,
        zIndex: 3,
        background: 'rgba(196, 196, 196, 0.03)',
        backdropFilter:' blur(41px)',
        "&:hover": {
            borderTop:"1px solid #EE5F22",
          },
   },
   categoryBlock: {
        height:437,
        position: "relative",
        display:"flex",
        justifyContent:"flex-start",
        overflow: "hidden",
        marginTop: theme.spacing(1),
        outline:"1px solid #C1C4C5",
        "&:hover": {
            outline:"1px solid #EE5F22",
             
          }
   },
   cardImage: {
    position: "relative",
    margin: '0 auto',
    display:'block',
    width:"100%",

   },
   categoryContentText: {
        padding:"23px 0 23px 23px",
   }
  

}));

export default function Item({ 
  size = 6, 
  title, 
  subtitle,
  image,
  display

  })  {
  const classes = useStyles();
  return (
 
 
        <Grid item xs={size}>
            <Link to="{link}" href="{link}">
                <Paper className={classes.categoryBlock}>
                <img className={classes.cardImage} src={image}></img>
                <Grid container className={classes.cardContent}>
                    <Grid item className={classes.categoryContentText}>
                        <Grid container direction="row" alignItems="center">
                          <Grid item xs={11}>
                            <Typography variant="subtitle1">{title}</Typography>
                            <Typography variant="body1">{subtitle}</Typography>
                          </Grid>
                          <Grid item xs>
                            <ArrowRight display={display}/>
                          </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
            </Paper>
            </Link>
    </Grid>
   
  
  );
};

        