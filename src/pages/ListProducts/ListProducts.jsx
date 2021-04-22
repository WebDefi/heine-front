import React from 'react';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from '../Products/components/Card/components/Item/Item'
import listProducts from '../../assets/images/listProducts.jpg'
 

export default function ListProducts( )  {
 
  return (
    
  
      <div style={{ padding:"70px 0"}}>
          <Container fluid>
          <Typography variant="h5">title </Typography>
              <Grid container justify="space-around" spacing={6}>
                  <Item link="/" size={4} display="none" image={listProducts} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
                  <Item link="/" size={4} display="none" title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
                  <Item link="/" size={4} display="none" title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
              </Grid>
              
          </Container>
          <hr></hr>
      </div>
 
  );
};
