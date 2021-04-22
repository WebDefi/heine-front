import React from 'react';
import { Grid,Button,Paper,Box } from '@material-ui/core';
import Item from './components/Item/Item'
import { makeStyles } from '@material-ui/core/styles';
import OrangeBtn from '../../common/Btns/OrangeBtn'
import LightOutlineBtn from '../../common/Btns/LightOutlineBtn'
import DarkOutlineBtn from '../../common/Btns/DarkOutlineBtn'
import HeineForm from '../../common/HeineForm/HeineForm'
import dermatoscopes from '../../assets/images/dermatoscopes.png'
import diagnostic from '../../assets/images/diagnostic.png'
import laryngoscopes from '../../assets/images/laryngoscopes.jpg'
import lor from '../../assets/images/lor.png'
import oftalmolog  from '../../assets/images/oftalmolog.png'
import light  from '../../assets/images/light.jpg'
import sfigmamometers  from '../../assets/images/sfigmamometers.png'
import stetoskops  from '../../assets/images/stetoskops.png'
import vet  from '../../assets/images/vet.png'
import binocular   from '../../assets/images/binocular.png'
import services   from '../../assets/images/services.png'
import heine from '../../assets/images/heine.png'
import warrantyBg from '../../assets/images/garant.png'
import contacts from '../../assets/images/contacts.png'
import map from '../../assets/images/MAP.svg'
import aboutUs from '../../assets/images/aboutUs.png'
import liDecoration from '../../assets/images/liPolygon.png'
import Slider from '../Slider/Slider'
 

export default function TopGrid()  {
  return (

    <Grid container spacing={1} style={{marginTop:"70px"}}>
    <Slider />
    <Item size={8} title="This is fourth item" image={dermatoscopes} text="some">
          <ul>
            <li>Item 1.1</li>
            <li>Item 1.2</li>
            <li>Item 1.3</li>
          </ul>
          <OrangeBtn buttonText="Подробнее"></OrangeBtn>
    </Item>
    <Item size={4} title="This is fourth item" image={oftalmolog} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={4} title="This is fourth item" image={laryngoscopes} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={4} title="This is fourth item" image={light} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={4} title="This is fourth item" image={sfigmamometers} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={6} title="This is fourth item" image={binocular} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={6} title="This is fourth item" image={lor} text="some">
    
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
        
    
    </Item>
    <Item size={4} title="This is fourth item" image={vet} text="some">
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
    </Item>
    <Item size={4} title="This is fourth item" image={stetoskops} text="some">
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
    </Item>
    <Item size={4} title="This is fourth item" image={diagnostic} text="some">
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
          <li>Item 1.3</li>
        </ul>
        <OrangeBtn buttonText="Подробнее"></OrangeBtn>
    </Item>
    <HeineForm />
    <Item size={4} bigTitle="Новости" subtitle="Новинки и интересные факты от HEINE." image={map} text="some" bgcolor="#EE5F22">
        <LightOutlineBtn buttonText="something" />
    </Item>
    <Item size={4} title="О НАС" imageCenter={aboutUs} text="some" subtitle="Кое-что интересное о прошлом, настоящем и будущем." contrast="#444">
        <DarkOutlineBtn buttonText="something" />
    </Item>
    <Item size={4}  bigTitle="HEINE" subtitle="Станьте частью нас!" image={heine} text="some" bgcolor="#EE5F22" >
      <LightOutlineBtn buttonText="something" />
    </Item>
    <Item size={4}  title="СЕРВИСЫ" image={services} text="some" gridheight="300px">
      <DarkOutlineBtn buttonText="something" />
    </Item>
    <Item size={4} image={warrantyBg}  contrastTitle="Гарантия 5 лет" text="some" bgcolor="#EE5F22" gridheight="300px" subtitle="HEINE является мировым лидером в производстве инструментов для первичной диагностики с более чем 500 сотрудниками.
Более 70 лет компания находится в 100% семейном владении и управлении" >
      <LightOutlineBtn buttonText="something" />
    </Item>
    <Item size={4}  title="Свяжитесь с нами" image={contacts} text="some" gridheight="300px">
      <DarkOutlineBtn buttonText="something" />
    </Item>
  </Grid>
  );
};