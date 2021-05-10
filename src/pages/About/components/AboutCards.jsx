import React from 'react';
import { Grid, TextField, Typography,Box,Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardItem from './components/CardItem'

 

export default function AboutCard() {
  return (
    <Container>
        <Grid container style={{marginTop:80}}>
            <CardItem/>
            <CardItem margin="30px"/>
            <CardItem/>
            <CardItem margin="30px"/>
        </Grid>
    </Container>
    
  );
};
