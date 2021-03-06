import React, { Component } from "react";
import Slider from "react-slick";
import slide from "../../assets/images/slide.jpg";
import { Grid } from "@material-ui/core";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import DarkOutlineBtn from "../../common/Btns/DarkOutlineBtn";
import Slide from "./components/Slide/Slide";
import { TrainRounded } from "@material-ui/icons";
import "./Slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };

    return (
      <Grid item xs={12}>
        <Slider {...settings}>
          <Slide
            sizeXs={12}
            sizeSm={12}
            sizeMd={12}
            gridheight="455px"
            bgcolor="#E2E4E3"
            title="Title1"  
            subtitle="Subtitle1"
            contrast="#444"
            image={slide}
            backgroundPosition="center"
          >
            <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
          </Slide>
          <Slide
            sizeXs={12}
            sizeSm={12}
            sizeMd={12}
            gridheight="455px"
            bgcolor="#E2E4E3"
            title="Title2"
            subtitle="Subtitle2"
            contrast="#444"
            image={slide}
            backgroundPosition="center"
          >
            <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
          </Slide>
          <Slide
            sizeXs={12}
            sizeSm={12}
            sizeMd={12}
            gridheight="455px"
            bgcolor="#E2E4E3"
            title="Title3"
            subtitle="Subtitle3"
            contrast="#444"
            image={slide}
            backgroundPosition="center"

          >
            <DarkOutlineBtn buttonText="something"></DarkOutlineBtn>
          </Slide>
        </Slider>
      </Grid>
    );
  }
}
