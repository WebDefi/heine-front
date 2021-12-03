// import React, { Component } from "react";
// import Slider from "react-slick";
// import slide from "../../assets/images/heine.png";
// import { Grid } from "@material-ui/core";
// import SliderItem from "./components/SliderItem";
// import productDetails from "../../assets/images/productDetails.png";

// export default class ProductSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null,
//     };
//     this.newState = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     // this.setState({
//     //   nav1: this.slider1,
//     //   nav2: this.slider2,
//     // });
//     fetch('http://116.202.243.73:3000/products/category/1')

//     .then((response) => response.json())

//     .then(category => {

//         this.setState({ data: category });

//     });
//   }

//   render() {
//     return (
//       <Grid item xs={6}>
//         <Grid container style={{ background: "#Fff" }}>
//           {/* <h2>Slider Syncing (AsNavFor)</h2>
//             <h4>First Slider</h4> */}
//           <Grid item xs={2} style={{ paddingTop: 20 }}>
//             <Slider
//               vertical={true}
//               centerMode={true}
//               asNavFor={this.state.nav1}
//               ref={(slider) => (this.slider2 = slider)}
//               slidesToShow={5}
//               swipeToSlide={true}
//               focusOnSelect={true}
//               arrows={false}
//               dots={false}
//             >
//               <SliderItem size={12} slide={this.newState.data.pictureUrl} />

//             </Slider>
//           </Grid>
//           <Grid item xs={10}>
//             <Slider
//               vertical={true}
//               useTransform={true}
//               arrows={false}
//               dots={false}
//               asNavFor={this.state.nav2}
//               ref={(slider) => (this.slider1 = slider)}
//             >
//               <SliderItem size={12} imageCenter={this.newState.data.pictureUrl} />
//             </Slider>
//           </Grid>
//           {/* <h4>Second Slider</h4> */}
//         </Grid>
//       </Grid>
//     );
//   }
// }
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";

import SliderItem from "./components/SliderItem";

export default function SyncSlider() {
  const [data, setData] = useState([]);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setData(jsonResponse.category);
      }
      console.log("categories:",jsonResponse.category);
    };
    getData();
  }, [setData]);

  return (
    <Grid item xs={6}>
      <Grid container style={{ background: "#Fff" }}>
        <Grid item xs={2} style={{ paddingTop: 20 }}>
          <Slider
            vertical={true}
            centerMode={true}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            dots={false}
          >
            <SliderItem size={12} slide={data.pictureUrl} />
            
          </Slider>
        </Grid>
        <Grid item xs={10}>
          <Slider
            vertical={true}
            useTransform={true}
            arrows={false}
            dots={false}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            <SliderItem size={12} imageCenter={data.pictureUrl} />
            
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  );
}
