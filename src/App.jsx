import React, { useState } from "react";
import Cookies from "js-cookie";
import  { appContext } from "./context/appContext";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "./components/Footer/Footer";
import styles from "./styles/styles.module.css";
import { withRouter } from "react-router-dom";
import { getRoutes } from "./routes";
import Phone from "./common/Phone/Phone";
import PopUp from "./common/PopUp/PopUp";

const App = () => {
  const [ showPopup, setShowPopup ] = useState(true); 
  return (
  <appContext.Provider value={{
    lang: Cookies.get('lang') || 'ru',        
  }}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />    
    { getRoutes() }    
    <Footer />
    <Phone />
    <PopUp show={showPopup} closePopup={() => setShowPopup(false)} />
  </ThemeProvider>
  </appContext.Provider>
)};

export default withRouter(App);
