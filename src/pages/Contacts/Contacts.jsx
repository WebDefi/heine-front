import React from 'react';
import { Grid, Link, Container, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from './components/Info/Info'
import Adress from './components/Info/components/Adress/Adress'
import SubHeader from '../../common/SubHeader/SubHeader'
import Form from '../Contacts/components/Form/Form'
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
                <Form title="Adasdasdasd" size={12}>
                    
                </Form>
            </Grid>
        </Container>
    </div>
  );
};
