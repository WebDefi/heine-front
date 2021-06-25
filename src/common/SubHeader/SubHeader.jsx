import React from 'react';
import { Container, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from './components/Item/Breadcrumbs'

const useStyles = makeStyles(theme => ({
  subHeaderContainer: {
      background:theme.palette.mainBg.main,
      marginTop:80,
      padding:"50px 0",
      borderBottom:theme.palette.borderMain.main
    },
}));


export default function SubHeader()  {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className={classes.subHeaderContainer}>
       <Container>
        <Breadcrumbs size={12} title="Продукция HEINE" subtitle="HEINE разрабатывает и производит полный спектр высококачественных инструментов для первичного обследования для различных медицинских специальностей." />
       </Container>
    </Grid>
  );
};
