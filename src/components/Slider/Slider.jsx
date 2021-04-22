import React, { Component } from "react";
import Slider from "react-slick";
import slide from '../../assets/images/slide.jpg'
import { Grid } from '@material-ui/core';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import DarkOutlineBtn from '../../common/Btns/DarkOutlineBtn'
import Item from '../TopGrid/components/Item/Item'

export default class SimpleSlider extends Component {
  render(size=12) {
    const settings = {
      arrows: false,
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Grid item xs={12}>
        <Slider {...settings}>
            <Item size={12} title="Title1" subtitle="Subtitle1" contrast="#444" imageCenter={slide}>
                <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
            </Item>
            <Item size={12} title="Title2" subtitle="Subtitle2" contrast="#444" imageCenter={slide}>
                <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
            </Item>
            <Item size={12} title="Title3" subtitle="Subtitle3" contrast="#444" imageCenter={slide}>
                <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
            </Item>
        </Slider>
      </Grid>
    );
  }
}