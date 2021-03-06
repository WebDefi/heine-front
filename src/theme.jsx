import { createMuiTheme } from "@material-ui/core/styles";

// import RalewayRegular from './fonts/Raleway-Regular.ttf';
// import RalewayMeduim from './fonts/Raleway-Medium.ttf';

// const ralewayRegular = {
//     fontFamily: 'Raleway',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 400,
//     src: `
//       local('Raleway'),
//       local('Raleway-Regular'),
//       url(${RalewayRegular}) format('ttf')
//     `,
//   };

//   const ralewayMedium = {
//     fontFamily: 'Raleway',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 500,
//     src: `
//       local('Raleway'),
//       local('Raleway-Medium'),
//       url(${RalewayMeduim}) format('ttf')
//     `,
//   };

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EE5F22",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
    },

    local: {
      main: "#393939",
    },
    secondary: {
      main: "#444",
      contrastText: "#fff",
      secondaryBorder: "1px solid #444",
    },
    lightGray: {
      main: "#DFE1E0",
    },

    mainBg: {
      main: "#F1F1F1",
    },
    borderMain: {
      main: "1px solid #C1C4C5",
    },
    mainBtnBorder: {
      main: "1px solid #EE5F22",
    },
    outlinedBtnLight: {
      main: "1px solid #FFFFFF",
    },
    outlinedBtnDark: {
      main: "1px solid #444444",
    },
    footerBorder: {
      main: "1px solid #4D4D4D",
    },
    headerBorder: {
      main: "12px solid #fff",
    },
    headerMobileBorder: {
      main: "8px solid #fff",
    },
    footerLinkHover: {
      main: "#2D2D2D",
    },
    newsCaption: {
      main: "#F2D1C2",
    },
    darkerText: {
      main: "#262626",
    },
    headerBorder: {
      main: "2px solid #212121",
    },
    headerBottom: {
      main: "12px solid #f1f1f1",
    },
    faqBorder: {
      main: "1px solid rgba(0,0,0,.125)",
    },
    cardBlur: {
      main: "rgba(196, 196, 196, 0.03)",
    },
  },

  typography: {
    HtmlFontSize: 14,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemiBold: "600",
    fontWeightBold: "700",
    fontWeightExtraBold: "800",
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      color: "#444444",
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      color: "#444444",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2.375rem",
      fontWeight: "600",
      color: "#444444",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#444444",
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: "1.375rem",
      fontWeight: "700",
      color: "#444444",
    },
    h6: {
      fontFamily: "Montserrat",
      fontSize: "1.375rem",
      fontWeight: "500",
      color: "#444444",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: "400",
      color: "#444444",
    },
    body2: {
      fontFamily: "Raleway",
      fontSize: "0.875rem",
      fontWeight: "400",
      color: "#444444",
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#444444",
    },
    subtitle2: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: "400",
      color: "#444444",
    },
  },
  spacing: 6,
  shape: {
    borderRadius: 0,
  },
  a: {
    hover: "#EE5F22",
  },
  shadows: ["none"],

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Montserrat",
        html: {
          boxSizing: "border-box",
        },
        body: {
          backgroundColor: "#F1F1F1",
          fontFamily: "Montserrat",
          fontWeight: "400",
          fontSize: 16,
          color: "#444",
          overflowX: "hidden",
        },

        a: {
          // fontFamily: 'Montserrat',
          textDecoration: "none",
        },

        li: {
          listStyle: "none",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      },
    },

    MuiButton: {
      root: {
        minWidth: 0,
      },
      text: {
        color: "white",
      },
    },
  },
});

export default theme;
