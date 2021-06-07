import React from 'react';
import { Grid, Link, Container,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './components/Card/Card'
import serviceLeft from '../../assets/images/serviceLeft.svg'
import serviceRight from '../../assets/images/serviceRight.svg'
import Icon from './components/svg/Icon'
import SubHeader from '../../common/SubHeader/SubHeader'


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
    },
    serviceSection: {
        background:theme.palette.white.main,
        
    },
    
 }));

export default function Products()  {
const classes = useStyles();
  return (
    <div>
    <SubHeader />
        <div className={classes.serviceSection}>
        <Container fluid  >
        <Typography variant="h6" style={{fontWeight:"500", paddingTop: 50}} >Мы стремимся предоставить вам самые лучшие продукты и услуги.</Typography>
        <Typography variant="body1" style={{paddingTop: 10,paddingBottom: 50}}>Наше стремление поставлять продукцию высокого качества также включает в себя исключительный уровень обслуживания и поддержки. Предоставление надежных советов и несложной помощи - это то, что ценят наши клиенты во всем мире.</Typography>
            <Grid container justify="space-around"   spacing={6} style={{paddingBottom:50}}>
               
                <Card size={4} title="ОБЩИЕ ВОПРОСЫ"  subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»." >
                    <img className={classes.leftImg} src={serviceLeft}></img>
                    <img className={classes.rightImg} src={serviceRight}></img>
                </Card>
                <Card size={4} title="ЗАГРУЗКИ"  subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»." >
                    <img className={classes.leftImg} src={serviceLeft}></img>
                    <img className={classes.rightImg} src={serviceRight}></img>
                </Card>
                <Card size={4} title="ВИДЕО КОНТЕНТ"  subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»." >
                    <img className={classes.leftImg} src={serviceLeft}></img>
                    <img className={classes.rightImg} src={serviceRight}></img>
                </Card>
            </Grid>
            <a href='https://medigran.com/zayavka-na-viyizd_ua'>
            <Grid container style={{paddingBottom:50}} alignItems='center'>
                <Grid item xs={1}>
                    <Icon />
                </Grid>
                <Grid item xs={11}>
                    <Typography variant='subtitle1'>Залиште заявку на виїзд нашого фахівця</Typography>
                    <Typography variant='body2'>Заповнивши спеціальну форму, Ви зможете легко, а головне швидко, замовити послугу виїзду нашого фахівця до Вашого складу або офісу.</Typography>
                </Grid>
            </Grid>
            </a>
        </Container>
        </div>
    </div>
  );
};
