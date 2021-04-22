import { createMuiTheme } from '@material-ui/core/styles';

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
            contrastText: "#fff"

        },
        white: {
            main:'#fff',
        },
         
        local: {
            main: "#393939",
        },
        secondary: {
            main: "#444",
            contrastText: "#fff"
            
        },
        lightGray: {
            main: "#DFE1E0",
        },
        
        mainBg: {
            main: "#F1F1F1",
        }
    },
    
    typography: {
        
        HtmlFontSize: 14,
        fontFamily: 'Montserrat',
        fontSize:14,
        fontWeightRegular: '400',
        fontWeightMedium: '500',
        fontWeightSemiBold: '600',
        fontWeightBold: '700',
        fontWeightExtraBold: '800',
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: '700',
            color:"#444444",
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: '700',
            color:"#444444",
        },
        h3: {
            fontFamily: 'Montserrat',
            fontSize: '2.375rem',
            fontWeight: '600',
            color:"#444444",
        },
        h4: {
            fontFamily: 'Montserrat',
            fontSize: '1.5rem',
            fontWeight: '700',
            color:"#444444",
            
        },
        h5: {
            fontFamily: 'Montserrat',
            fontSize: '1.375rem',
            fontWeight: '700',
            color:"#444444",
        },
        h6: {
            fontFamily: 'Montserrat',
            fontSize: '1.375rem',
            fontWeight: '400',
            color:"#444444",
        },
        body1: {
            fontFamily: 'Montserrat',
            fontSize: '1rem',
            fontWeight: '400',
            color:"#444444",
        },
        body2: {
            fontFamily: 'Raleway',
            fontSize: '1rem',
            fontWeight: '400',
            color:"#444444",
        },
        subtitle1: {
            fontFamily: 'Montserrat',
            fontSize: '1rem',
            fontWeight: '600',
            color:"#444444",
        },
        subtitle2: {
            fontFamily: 'Montserrat',
            fontSize: '1rem',
            fontWeight: '400',
            color:"#444444",
        }
        


    },
    shape: {
        borderRadius: 0,
    },
    a: {
        hover:"#EE5F22",
    },
    shadows: ["none"],

    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': 'Montserrat',
                html: {
                    boxSizing: 'border-box',
                },
                body: {
                    backgroundColor: '#F1F1F1',
                    fontFamily:'Montserrat', 
                    fontWeight: "400",
                    fontSize: 16,
                    color: '#444',    
                },
                 
                a: {
                    // fontFamily: 'Montserrat',
                    textDecoration:"none",
                    
                },
                
                li: {
                    listStyle: 'none',
                },
                ul:{
                    margin:0,
                    padding:0,
                }
                

            }
        },
         
        MuiButton: {
            root: {
                minWidth: 0
            },  
            text: {
              color: 'white',
            },
        },
    },
    
})

export default theme;