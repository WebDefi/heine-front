import React from 'react';
import { Grid, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubHeader from '../../common/SubHeader/SubHeader'

const useStyles = makeStyles(theme => ({
  productsSection: {
    background:theme.palette.white.main,
    padding:"70px 0"
  }

}));

export default function ProductDetails()  {
  const classes = useStyles();
  return (
    <div>
      <SubHeader /> 
      <div className={classes.productsSection}>
          <Container fluid >
              <Grid container>
                  
              </Grid>
          </Container>
      </div>
    </div>
  );
};
