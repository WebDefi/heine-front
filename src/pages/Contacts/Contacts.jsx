import React from 'react';
import { Grid, Link, Container, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from './components/Info/Info'
import Adress from './components/Info/components/Adress/Adress'
import SubHeader from '../../common/SubHeader/SubHeader'
import Form from '../Contacts/components/Form/Form'
import News from './components/News/News'
export default function Products()  {
 
  return (
    <div>
        <SubHeader /> 
        <Container fluid  >
            <Grid container justify="space-around"   spacing={6}>
                <Info size={6} subtitle1="У вас есть вопросы, предложения, хотите что-то заказать или отправить нам предложение? Тогда напишите нам!" subtitle2="sadasdasd"></Info>
                <Adress size={6}>
                    <ul>
                        <li>HEINE Optotechnik GmbH & Co. KG</li>
                        <li>Тел.: +49 8105 7728 0</li>
                    </ul>
                </Adress>
                <Form title="Adasdasdasd" size={12}/>
                <News size="12" title="asdasd"/>
            </Grid>

        </Container>
        <iframe style={{border:"none",marginTop:80}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22050.16573887866!2d30.661268899999996!3d46.3044608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1620511658488!5m2!1sru!2sua" width="100%" height="450" border="none" allowfullscreen="" loading="lazy"></iframe>
    </div>
  );
};
