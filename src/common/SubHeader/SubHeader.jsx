import React from 'react';
import { Container, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './components/Item/Item'

 

export default function SubHeader()  {
 
  return (
    <Grid container justify="flex-start" style={{background:"#F1F1F1" , padding:"30px 0", borderBottom:"1px solid #C1C4C5" }}>
        <Item size={12} title="Продукция HEINE" subtitle="HEINE разрабатывает и производит полный спектр высококачественных инструментов для первичного обследования для различных медицинских специальностей.">
            <Link color="secondary" href="/">Home</Link>
            <Link color="secondary" href="/">Home</Link>
        </Item>
    </Grid>
  );
};
