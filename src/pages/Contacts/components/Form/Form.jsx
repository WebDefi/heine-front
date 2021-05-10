import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/Input'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from './components/Select'
import NativeSelect from '@material-ui/core/NativeSelect';
import Nultiline from './components/Multiline'
import Multiline from './components/Multiline';

export default function Form({ 
  size = 6, 
  children,
  title,
  })  {
    
   
 
  return (
    <Grid item xs={size}>
      <div>
      <Typography variant="h4">{title}</Typography>
      <form>
        <Grid container justify="space-between" direction="row" spacing={5}>
          <Input placeholder="Компания" article="Компания"/> 
          <Input placeholder="Имя" article="Имя*"/> 
          <Input placeholder="Город" article="Город*"/> 
          <Input placeholder="Страна" article="Страна*"/> 
          <Input placeholder="E-Мейл" article="Е-Мейл*"/> 
          
          <Select article="Cпециальность"/>
          <Select article="Функция"/>
          <Input placeholder="Тема" article="Тема"/> 
          <Multiline article="Сообщение" />
          
        </Grid>
      </form> 
         {children}
      </div>
    </Grid>
  );
};
