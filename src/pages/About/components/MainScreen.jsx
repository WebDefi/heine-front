import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AboutLeft from '../../../assets/images/AboutLeft.jpg'
import AboutRight from '../../../assets/images/AboutRight.jpg'
import medigranAbout from '../../../assets/images/medigranAbout.png'
import medigranPartner from '../../../assets/images/medigranPartner.png'


const useStyles = makeStyles(theme => ({
  aboutWrap: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexFlow: "column",
    overflow: "hidden",
    color: "#fff",
    [theme.breakpoints.down('md')]: {
      height: "1000px",
    },
  },
  medigran:{
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
  },
  heine: { 
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    clipPath: "polygon(100% 100%, 100% 0, 0 0)",
    [theme.breakpoints.down('md')]: {
      clipPath:"none",
      marginTop: 405,
    },
  },
  medigran: {
    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
    [theme.breakpoints.down('md')]: {
      clipPath:"none",
    },
  },
  medigranBlock: {
    position: "relative",
    width: "100vw",
    height: "100%",
    display: "flex",   
  },
  heineBlock:{
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex", 
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundImage: `url(${AboutRight})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "100%",
    [theme.breakpoints.down('md')]: {
      alignItems: "flex-end",
    },
 
  },
  medigranBlock:{
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex", 
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundImage: `url(${AboutLeft})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "100%",
    
     
  },
  
   
  heineFilter:{
    backgroundColor: "#b8551f",
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.3,
  },
  medigranFilter:{
    backgroundColor: "#4e98f4",
    position: "absolute",
    width: "inherit",
    height: "inherit",  
    opacity: 0.3,
    
  },

  medigranContent:{
    height:250,
    position: "absolute",
    zIndex: 3,
    background: "rgba(0, 159, 253, 0.5)",
    backdropFilter: "blur(22px)",
    padding:"20px 700px 20px 40px",
    [theme.breakpoints.down('md')]: {
      padding:"40px 20px",
    },
    [theme.breakpoints.down('sm')]: {
      padding:"20px 20px",
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop:0,
      paddingLeft:20,
      paddingRight:20,
    },
    width:"100vw",
  },
  heineContent: {
    height:250,
    position: "absolute",
    zIndex: 4,
    padding:"20px 20px 20px 700px",
    background: "rgba(238, 95, 34, 0.4)",
    backdropFilter: "blur(22px)",
    width:"100vw",
    [theme.breakpoints.down('md')]: {
      padding:"40px 20px",
    },
    [theme.breakpoints.down('sm')]: {
      padding:"20px 20px",
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop:0,
      paddingLeft:20,
      paddingRight:20,
    },
  },
  contrast: {
    color:theme.palette.secondary.contrastText
  }
  
}));

export default function MainScreen() {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{marginTop:120}}>
      <Grid container className={classes.aboutWrap}>
        <div className={classes.heine}>
          <div className={classes.heineBlock}>
            <div className={classes.heineFilter}></div>
            <div className={classes.heineContent}>
              <Typography variant="h5" className={classes.contrast} style={{paddingBottom:10,fontWeight:700,fontSize:44}}>HEINE</Typography>
              <Typography variant="body2" className={classes.contrast}>В течение многих лет на рынке Украины мы представляем широкий портфельмедицинского,лабораторного, стоматологического оборудования и расходных материалов от лучших мировых производителей.Наша Компания стремится, чтобы в медицинских учреждениях использовалось исключительно современное и надежное оборудование.</Typography>
            </div>
          </div>
        </div>
        <div className={classes.medigran}>
          <div className={classes.medigranBlock}>
            <div className={classes.medigranFilter}></div>
            <div className={classes.medigranContent}>
              <Typography variant="h5" className={classes.contrast} style={{paddingBottom:10,fontWeight:700,fontSize:44}}>Медігран</Typography>
              <Typography variant="body2" className={classes.contrast}>В течение многих лет на рынке Украины мы представляем широкий портфельмедицинского,лабораторного, стоматологического оборудования и расходных материалов от лучших мировых производителей.Наша Компания стремится, чтобы в медицинских учреждениях использовалось исключительно современное и надежное оборудование.</Typography>
            </div>
        </div>
        
      </div>
     
    </Grid>
    {/* <img style={{position:"absolute",bottom:"-165px",right:0,width:"80vw"}} src={medigranPartner}/>  */}
    </Grid>
  );
};
