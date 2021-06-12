import React from 'react';
import { Grid, Link, Container,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductInfoItem from './components/ProductInfoItem'
import ProductInfoConfiguration from './components/ProductInfoConfiguration'
const useStyles = makeStyles(theme => ({

    
 }));

export default function ProductInfo(props)  {
const classes = useStyles();
  return (
    <Grid item xs={6}>
        <Typography variant="h5" style={{fontWeight:"600", paddingTop: 50}}>{props.prodTitle}</Typography>
        <Typography variant="body1" style={{paddingTop: 10,paddingBottom: 50}}>{props.prodArticle}</Typography>
        <ProductInfoItem />
        <ProductInfoConfiguration/> 
    </Grid>
  );
};
