import React from 'react';
import { Grid, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './components/Card/Card'
import serviceLeft from '../../assets/images/serviceLeft.svg'
import serviceRight from '../../assets/images/serviceRight.svg'
import Icon from './components/svg/Icon'

const useStyles = makeStyles(theme => ({
    leftImg: {
        position:"absolute",
        top:0,
        left: 0,
    },
    rightImg: {
        position: "absolute",
        bottom:0,
        right:0,
        "&:hover": {
            stroke: "#fff",
            fill:"#fff",
          }
    },
 }));

export default function Products(isBlack)  {
const classes = useStyles();
  return (
    <div>
        <Container fluid  >
            <Grid container justify="space-around"   spacing={6}>
            <Icon />
            <Card size={4} title="asdasdd"  subtitle="sussssssssss" >
                    <Icon />
                </Card>
                <Card size={4} title="asdasdd"  subtitle="sussssssssss" >
                    <img className={classes.leftImg} src={serviceLeft}></img>
                    <img className={classes.rightImg} src={serviceRight}></img>
                </Card>
                <Card size={4} title="asdasdd"  subtitle="sussssssssss" >
                    <img className={classes.leftImg} src={serviceLeft}></img>
                    <img className={classes.rightImg} src={serviceRight}></img>
                </Card>
            </Grid>
        </Container>
    </div>
  );
};
