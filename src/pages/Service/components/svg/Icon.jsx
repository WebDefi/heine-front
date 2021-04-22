import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  svgi: {
    fill:"#fff",
    "&:hover": {
      fill:"#111",

    },
  }
}))

const Icon = () => {
  const classes = useStyles();
  const [fill, setBackground] = useState("#fdfdfd");

  const [font, setFont] = useState("#424246");

  const setStyle = (fill, font) => {
    setBackground(fill);
    setFont(font);
  };

  // const card = css`
  //   max-width: 600px;
  //   padding: 40px 40px 20px 40px;
  //   background-color: ${background};
  //   h1 {
  //     font-family: "Abril Fatface", cursive;
  //     font-weight: 400;
  //     font-size: 36px;
  //     margin-bottom: 10px;
  //     color: ${font};
  //   }
  //   p {
  //     font-family: "Poppins", sans-serif;
  //     font-weight: 300;
  //     font-size: 16px;
  //     margin-bottom: 20px;
  //     color: ${font};
  //   }
  // `;

  // const cardButtons = css`
  //   display: flex;
  //   flex-wrap: wrap;

  //   div {
  //     font-family: "Poppins", sans-serif;
  //     font-weight: 500;
  //     font-size: 12px;
  //     padding: 10px 30px;
  //     margin-right: 20px;
  //     margin-bottom: 20px;
  //     border: none;
  //     border-radius: 50px;
  //     cursor: pointer;
  //   }
  // `;

  // const blackButton = css`
  //   color: #fdfdfd;
  //   background-color: #424246;
  // `;

  // const blueButton = css`
  //   color: #fdfdfd;
  //   background-color: #1d499b;
  // `;

  // const yellowButton = css`
  //   color: #424246;
  //   background-color: #f9d648;
  // `;

  return (
    <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"  version="1.1" className={classes.svgi}>
      <rect x="0" y="0" width="900" height="600" fill="#444444" className={classes.svgi}></rect>
      <defs><linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%"><stop offset="20%" stop-color="#444444" stop-opacity="1"></stop><stop offset="80%" stop-color="#444444" stop-opacity="1"></stop></linearGradient>
      </defs><defs><linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%"><stop offset="20%" stop-color="#444444" stop-opacity="1"></stop><stop offset="80%" stop-color="#444444" stop-opacity="1"></stop></linearGradient></defs>
      <g transform="translate(900, 600)"><path className={classes.svgi} d="M-486.7 0C-479.7 -62.4 -472.6 -124.8 -449.7 -186.3C-426.8 -247.7 -388 -308.2 -334.5 -334.5C-280.9 -360.7 -212.4 -352.7 -154.2 -372.3C-96 -392 -48 -439.4 0 -486.7L0 0Z" fill="#646464"></path></g><g transform="translate(0, 0)"><path className={classes.svgi} d="M486.7 0C469 59.2 451.3 118.3 430.5 178.3C409.8 238.3 386 299.1 344.2 344.2C302.4 389.3 242.5 418.6 182.2 439.8C121.8 460.9 60.9 473.8 0 486.7L0 0Z" fill="#646464">
      </path>
      </g>
    </svg>

      
    //   <div className={cardButtons}>
    //     <div
    //       onMouseEnter={() => setStyle("#424246", "#fdfdfd")}
    //       onMouseOut={() => setStyle("#fdfdfd", "#424246")}
    //       className={blackButton}
    //     >
    //       Black
    //     </div>
    //     <div
    //       onMouseEnter={() => setStyle("#1d499b", "#fdfdfd")}
    //       onMouseOut={() => setStyle("#fdfdfd", "#424246")}
    //       className={blueButton}
    //     >
    //       Blue
    //     </div>
    //     <div
    //       onMouseEnter={() => setStyle("#f9d648", "#424246")}
    //       onMouseOut={() => setStyle("#fdfdfd", "#424246")}
    //       className={yellowButton}
    //     >
    //       Yellow
    //     </div>
    //   </div>
    // </div>
  );
};

export default Icon;
