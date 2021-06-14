import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRight from  './ArrowRight'


// http://116.202.243.73:3000/products/category/1
// acc
// accessories/accessoryCategory/

const useStyles = makeStyles(theme => ({
   cardContent: {
        borderTop:theme.palette.borderMain.main,
        position: "absolute",
        bottom: 0,
        zIndex: 3,
        background: theme.palette.cardBlur.main,
        backdropFilter:' blur(41px)',
        "&:hover": {
            transition: "all 0.3s ease",
            borderTop:theme.palette.mainBtnBorder.main,
          },
   },
   categoryBlock: {
        height:437,
        position: "relative",
        display:"flex",
        justifyContent:"flex-start",
        overflow: "hidden",
        marginTop: theme.spacing(1),
        outline:theme.palette.borderMain.main,
        "&:hover": {
            transition: "all 0.3s ease",
            outline:theme.palette.mainBtnBorder.main,
             
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
   },
   cardTitle: {
     "&:hover": {
       color:theme.palette.primary.main,
     }
   }
  

}));

export default function Item({ 
  size = 6, 
  title, 
  subtitle,
  image,
  display,
  link

  })  {
  const classes = useStyles();
  return (
 

 
        <Grid item xs={size}>
            <a href={link}>
                <Paper className={classes.categoryBlock}>
                <img className={classes.cardImage} src={image}></img>
                <Grid container className={classes.cardContent}>
                    <Grid item className={classes.categoryContentText}>
                        <Grid container direction="row" alignItems="center">
                          <Grid item xs={11}>
                            <Typography variant="subtitle1" className={classes.cardTitle}>{title}</Typography>
                            <Typography variant="body1">{subtitle}</Typography>
                          </Grid>
                          <Grid item xs>
                            <ArrowRight display={display}/>
                          </Grid>
                        </Grid>
                    </Grid> 
                </Grid>
            </Paper>
            </a>
    </Grid>
   
  
  );
};

        