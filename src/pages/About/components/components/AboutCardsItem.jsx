import React from 'react';
import { Grid, TextField, Typography,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
import people from '../../../../assets/images/1.svg'
import sec from '../../../../assets/images/2.svg'
import th from '../../../../assets/images/3.svg'


const useStyles = makeStyles(theme => ({
   card: {
    background: '#fafafa',
    boxShadow: '0px 20px 20px rgb(0 0 0 / 5%)',
    position: 'relative',
    display: 'inline-block',
    color: '#000000',
    paddingLeft: '2.50em',
    paddingRight: '2.80em',
    paddingTop: '0.76em',
    paddingBottom: '0.76em',
    mineight: '5.00em',
    borderRadius:16,
    margin:"0 20px"
   }
}));

export default function AboutCardItem({ firstCardText='Професіоналів', secondCardText='Років ми працюємо на ринку ', thirdCardText='Партнерів по всьому світу' }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" style={{margin:"40px 0"}} >
        <Grid item xs={3} className={classes.card}>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    <img src={people}></img>
                </Grid>
                <Grid item>
                    <Typography variant='h3' style={{color:"#FAC415"}}>40+</Typography>
                    <Typography>{firstCardText}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3} className={classes.card}>
            <Grid container justify='space-between'   alignItems='center'>
                <Grid item>
                    <img src={people}></img>
                </Grid>
                <Grid item>
                    <Typography variant='h3' style={{color:"#FAC415"}}>40+</Typography>
                    <Typography>{firstCardText}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3} className={classes.card}>
            <Grid container justify='space-between'   alignItems='center'>
                <Grid item>
                    <img src={people}></img>
                </Grid>
                <Grid item>
                    <Typography variant='h3' style={{color:"#FAC415"}}>40+</Typography>
                    <Typography>{firstCardText}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
};
