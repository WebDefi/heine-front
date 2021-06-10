import React from 'react';
import { Grid, Container, Typography, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Card.css'


export default function Card({ 
  size = 6, 
  title, 
  children, 
  subtitle,
  image,
  article,
  link,
  })  {
  return (
 
 
        <Grid item xs={size}>
            <a href="{link}" >
                <div className="main">
                  <Paper className='categoryBlock'>
                  {children}
                  <Typography variant="h2" style={{position:"absolute",color:"#fff", margin:'2rem'}}>{title}</Typography>
                  </Paper>
                  <div  className="categoryContent">
                    <Typography variant="subtitle1" className='categoryContentText'>{title}</Typography>
                    <Typography variant="body2" style={{margin:"10px 20px"}}>{subtitle}</Typography>
                  </div>
                </div>
                
            </a>
        </Grid>
  ); 
}         