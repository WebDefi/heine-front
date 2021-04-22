import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'
import { ThemeProvider } from "@material-ui/core/styles";
// import GridComponents from './components/Grid/GridComponents'
import styles from './styles/styles.module.css'
// import Footer from './components/Footer/Footer'
// import Products from './components/Products/Products'
import Products from './pages/Products/Products'
import Service from './pages/Service/Service'
import TopGrid from './components/TopGrid/TopGrid'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Contacts from './pages/Contacts/Contacts'
import HeineForm from './common/HeineForm/HeineForm'
import News from './pages/News/News'
import NewsDetails from './pages/News/components/NewsDetails/NewsDetails'
import ListProducts from './pages/ListProducts/ListProducts'
    const App =()=>  (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Header />
                <TopGrid />
                {/* <Service /> */}
                <Products />
                <News />
                <NewsDetails />
                <ListProducts /> 
                <Contacts />
                 {/* <Router>
                   
                    <Switch>
                      <Route path="/Products" component={Products}/>
                      <Route exact path="/" component={TopGrid}/>
                    
                    </Switch>
                    
                  

                </Router> */}
                <Footer />
        </ThemeProvider>
      );

export default App;


