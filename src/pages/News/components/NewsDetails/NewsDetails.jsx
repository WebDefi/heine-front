import React from 'react';
import { Grid, Link, Container } from '@material-ui/core';
import SubHeader from '../../../../common/SubHeader/SubHeader'
import DetailsItem from './components/DetailsItem'

export default function NewsDetails()  {
 
  return (
      <div style={{background:"#fff"}}>
      <SubHeader />
        <Container style={{paddingTop:"40px"}}>
            <Grid container justify="center" >
                <DetailsItem title="asdasdasd" subtitle="asdasdasd"/>
            </Grid>
        </Container>
    </div>
  );
};
