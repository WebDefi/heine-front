import React from 'react';
import { Grid, TextField, Typography, Box, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardItem from './components/CardItem'
import medigran from '../../../assets/images/logo-blue.png'
import q from '../../../assets/images/q.svg'
import mission from '../../../assets/images/mission.svg'
import AboutCardItem from './components/AboutCardsItem'
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  quoteContent: {
    background: '#FAFAFA',
    borderRadius:"4px",
    boxShadow: '0px 20px 20px rgb(0 0 0 / 5%)',
    position: 'relative',
    display: 'inline-block',
    color: '#000000',
    paddingLeft: '2.50em',
    paddingRight: '2.80em',
    paddingTop: '0.76em',
    paddingBottom: '0.76em',
    mineight: '5.00em',
    '&::after': {
      content: '',
      backgroundImage: 'url()'
    }
  },


}));


export default function AboutCard() {
  const classes = useStyles();
  return (
      <Grid container style={{ paddingTop: 120,background: "linear-gradient(to bottom, #5ab6f3f7, transparent)"  }}>
        <Container>
        <Grid container alignItems='center' justify="center">
          <Grid item xs={8} sm={5} md={3}>
           <Link to="https://medigran.com/"> <img src={medigran} /></Link>
          </Grid>
          <Grid xs={12} className={classes.quoteContent} style={{ marginTop: 20 }}>
            <Typography variant='subtitle1' align='center'>«Будущее зависит от того, что Вы делаете сегодня»</Typography>
            <Typography variant='body1' align='center'>Махатма Ганди</Typography>
          </Grid>
        </Grid>
        <Grid container style={{marginTop:'52px'}}>
          <Grid item xs={12} sm={12} md={2} >
            <img src={mission} style={{ margin: '0 auto', display: 'block' }} />
            <Typography variant='h5' align='center' style={{ fontWeight: '500' }}>Миссия:</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Typography>В течение многих лет на рынке Украины мы представляем широкий портфель медицинского,
лабораторного, стоматологического оборудования и расходных материалов от лучших мировых производителей.</Typography>
            <Typography style={{ paddingTop: 10 }}>В течение многих лет на рынке Украины мы представляем широкий портфель медицинского,
лабораторного, стоматологического оборудования и расходных материалов от лучших мировых производителей.</Typography>
          </Grid>
        </Grid>
        <AboutCardItem />
        </Container>
      </Grid>
    

  );
};

