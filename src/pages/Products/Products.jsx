import React from 'react';
import { Grid, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './components/Card/components/Item/Item'
// import SubHeader from '../../common/SubHeader/SubHeader'
import dermatologyCategory from '../../assets/images/category1.jpg'
import dermatoscopesCategory from '../../assets/images/category2.jpg'
import SubHeader from '../../common/SubHeader/SubHeader'


export default function Products()  {
  
  return (
    <div>
      <SubHeader /> 
      <div style={{ background: "#fff", padding:"70px 0"}}>
          <Container fluid  >
              <Grid container justify="space-around" spacing={6}>
                  <Item link="/" size={6} image={dermatologyCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
                  <Item size={6} image={dermatoscopesCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification."/>
                  <Item size={6} image={dermatologyCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
                  <Item size={6} image={dermatoscopesCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification."/>
                  <Item size={6} image={dermatologyCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification." />
                  <Item size={6} image={dermatoscopesCategory} title="Дерматоскопы" subtitle="Better illumination. Higher colour rendering. More magnification."/>
              </Grid>
          </Container>
      </div>
    </div>
  );
};
