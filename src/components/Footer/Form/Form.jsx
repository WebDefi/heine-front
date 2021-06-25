import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/input'
import NameForm from '../../../common/FooterInput/NameForm'
 

const useStyles = makeStyles(theme => ({
  mobileForm: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
  },
  mobileTitle: {
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center'
    },
  }
  

}));

export default function Form({ 
  sizeXs = 12,
  sizeSm = 12, 
  sizeMd = 3,
  title, 
  children, 
  contrast="#fff",
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={sizeXs} sm={sizeSm} md={sizeMd}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
            <Grid item className={classes.mobileTitle}>
              <Typography variant="h6" style={{color:contrast,marginBottom:"30px"}}>{title}</Typography>
            </Grid>
            <Grid item className={classes.mobileForm} style={{display:"flex"}}>
              <NameForm />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
