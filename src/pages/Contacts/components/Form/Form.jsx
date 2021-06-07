import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import Input from './components/Input'
import Multiline from './components/Multiline';
import OrangeBtn from '../../../../common/Btns/OrangeBtn'

export default function Form({ 
  size = 6, 
  children,
  title,
  })  {
    
   
 
  return (
    <Grid item xs={size}>
      <div>
      <Typography style={{padding:'20px 0'}} variant="h4">{title}</Typography>
      <form style={{paddingBottom:10}}>
        <Grid container justify="space-between" direction="row" spacing={5}>
          <Input placeholder="Имя" article="Имя"/> 
          <Input placeholder="E-Мейл" article="Е-Мейл*"/> 
          
          <Multiline size='12' article="Сообщение" />
          
        </Grid>
      </form> 
        <OrangeBtn buttonText='Send' width="100%" padding="7px"/>
         {children}
      </div>
    </Grid>
  );
};
