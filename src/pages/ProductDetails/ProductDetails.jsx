import React from 'react';
import { Grid, Link, Container,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubHeader from '../../common/SubHeader/SubHeader'
import ProductInfo from './ProductInfo'
import ProductSlider from './ProductSlider'

const useStyles = makeStyles(theme => ({
    
 }));

export default function ProductDetails()  {
const classes = useStyles();
  return (
    <div>
    <SubHeader />
        <div style={{background: '#fff'}}>
            <Container fluid  >
              <Grid container>
                <ProductSlider />
                <ProductInfo prodTitle="prodTitle" prodArticle="prodArticle"/>
          
              </Grid>
            </Container>
        </div>
    </div>
  );
};
