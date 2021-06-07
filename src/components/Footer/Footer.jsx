import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Col from './Col/Col'
import Form from './Form/Form'
import medigranLogo from '../../assets/images/medigranLogo.png'
import NameForm from '../../common/FooterInput/NameForm'
import { Palette } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  footer: {
      paddingTop: 80,
      background:theme.palette.local.main,
    
  },
  link: {
      color:theme.palette.secondary.contrastText,
      padding:"5px",
      
      "&:hover": {
          width:"100%",
          background:theme.palette.footerLinkHover.main,
          borderRadius:"7px"
      }
  },
  privacyLink: {
    color:theme.palette.secondary.contrastText,
        "&:hover": {
            color:theme.palette.primary.main,
        }
  },
  footerContent: {
    borderTop:theme.palette.footerBorder.main,
    paddingTop:40
  }
    
  

}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Grid container spacing={4} justify="center" className={classes.footerContent}>
            <Form size="3" title="Нужна помощь в подборе оборудования?"/>
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
           <Grid container justify="center" style={{margin:"50px 0 20px 0"}}>
                <Col size="2">
                    <a href="#"><Typography variant="body2" className={classes.privacyLink}>Terms & Conditions</Typography></a>
                </Col>
                <Col size="2">
                    <a href="#"> <Typography variant="body2" className={classes.privacyLink}>Privacy Policy</Typography></a>
                </Col>
                <Col size="3">
                    <a href="#"><Typography variant="body2" className={classes.privacyLink}>Официальный представитель Heine в Украине</Typography></a>
                </Col>
           </Grid>
             
        </Grid>
    </footer> 
  );
};
