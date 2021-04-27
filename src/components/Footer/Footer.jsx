import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Col from './Col/Col'
import Form from './Form/Form'
import { Palette } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  footer: {
      marginTop: 12,
      paddingTop: 60,
      background:theme.palette.secondary.main,
    
  },
  link: {
      color:"#fff",
      padding:"5px",
      
      "&:hover": {
          width:"100%",
          background:"#2D2D2D",
          borderRadius:"7px"
      }
  }
    
  

}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Grid container spacing={1} justify="space-around">
            <Form size="3" title="Нужна помощь в подборе оборудования?" >
                <TextField />
            </Form>
            <Col size="2" title="Продукция">
                <ul>
                    <Typography className={classes.link} variant="body2">Сфигмоманометры и стетоскопы</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                     
                </ul>
                
            </Col>
            <Col size="2" title="Продукция">
            <ul>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                     
                </ul>
                
            </Col>
            <Col size="2" title="Продукция">
                <ul>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                     
                </ul>
                
            </Col>
            <Col size="2" title="Продукция">
                <ul>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                    <Typography className={classes.link} variant="body2">ЛОР-инструменты</Typography>
                     
                </ul>
                
            </Col>
             
        </Grid>
    </footer> 
  );
};
