import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Col from './Col/Col'
import Form from './Form/Form'
import { Palette } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  footer: {
      marginTop: 12,
      background:theme.palette.secondary.main,

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
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                </ul>
            </Col>
            <Col size="2" title="Продукция">
                <ul>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                </ul>
            </Col>
            <Col size="2" title="Продукция">
                <ul>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                </ul>
            </Col>
            <Col size="2" title="Продукция">
                <ul>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                    <li><a>ЛОР-инструменты</a></li>
                </ul>
            </Col>
        </Grid>
    </footer> 
  );
};
