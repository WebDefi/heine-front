import React, { Component } from "react";
import Slider from "react-slick";
import slide from "../../assets/images/heine.png";
import { Grid } from "@material-ui/core";
import SliderItem from "./components/SliderItem";
import productDetails from "../../assets/images/productDetails.png";
import "./slider.css";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Grid item xs={6}>
        <Grid container style={{ background: "#Fff" }}>
          {/* <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4> */}
          <Grid item xs={2} style={{ paddingTop: 20 }}>
            <Slider
              vertical={true}
              centerMode={true}
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              dots={false}
            >
              <SliderItem size={12} slide={productDetails} />
              <SliderItem size={12} slide={productDetails} />
              <SliderItem size={12} slide={productDetails} />
              <SliderItem size={12} slide={productDetails} />
              <SliderItem size={12} slide={productDetails} />
            </Slider>
          </Grid>
          <Grid item xs={10}>
            <Slider
              vertical={true}
              useTransform={true}
              arrows={false}
              dots={false}
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
            >
              <SliderItem size={12} imageCenter={productDetails} />
              <SliderItem size={12} imageCenter={productDetails} />
              <SliderItem size={12} imageCenter={productDetails} />
            </Slider>
          </Grid>
          {/* <h4>Second Slider</h4> */}
        </Grid>
      </Grid>
    );
  }
}
