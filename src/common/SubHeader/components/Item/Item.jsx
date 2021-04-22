import React from 'react';
import { Grid,  Typography,  Container, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(theme => ({
  SubHeaderTitle: {
    paddingTop:50,
    fontWeight:"600",
    textTransform:"uppercase",
  },
  SubHeaderSubTitle: {
    padding: '15px 0',
  }
  

}));
 

export default function Form({ 
  size = 2, 
  title, 
  children,
  subtitle,
  })  {
    const classes = useStyles();
  return (
    
    <Grid item xs={size}>
      <Container>
        <Breadcrumbs>
          {children}
        </Breadcrumbs>
        <Typography variant="h4" className={classes.SubHeaderTitle}>{title}</Typography>
        <Typography variant="body1" className={classes.SubHeaderSubTitle}>{subtitle}</Typography>
      </Container>

    </Grid>
    
  );
};
