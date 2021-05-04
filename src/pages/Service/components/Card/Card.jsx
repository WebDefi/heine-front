import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(theme => ({
   cardContent: {
        
        background: '#f1f1f1',
        paddingTop:50,
        height:200,
        "&:hover": {
            borderTop:theme.palette.primary.main,

          },
   },
   categoryBlock: {
        borderRadius: "0 20px 0 0",
        height:230,
        position: "relative",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        
        overflow: "hidden",
        marginTop: theme.spacing(1),
        background:theme.palette.secondary.main,
        
        border:theme.palette.secondary.secondaryBorder,
        "&:hover": {
            border:theme.palette.mainBtnBorder.main,
            background:theme.palette.mainBtnBorder.main,
          }
   },
    
   categoryContentText: {
        margin:"10px 20px",
        
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
            <Link to="{link}" href="{link}">
                <Paper className={classes.categoryBlock}>
                {children}
                <Typography variant="h2" style={{position:"absolute",color:"#fff" }}>{title}</Typography>
                </Paper>
                <div style={{border:"1px solid #444"}}>
                  <Typography variant="subtitle1" className={classes.categoryContentText}>{title}</Typography>
                  <Typography variant="body2" className={classes.categoryContentText}>{subtitle}</Typography>
                </div>
                
            </Link>
        </Grid>
  ); 
}         