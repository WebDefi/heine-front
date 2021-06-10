import React from 'react';
import Header from './components/Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'
import { ThemeProvider } from "@material-ui/core/styles";
import Products from './pages/Products/Products'
import Service from './pages/Service/Service'
import TopGrid from './components/TopGrid/TopGrid'
import Footer from './components/Footer/Footer'
import FAQ from './pages/FAQ/FAQ'
import styles from './styles/styles.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import News from './pages/News/News'
import NewsDetails from './pages/News/components/NewsDetails/NewsDetails'
import ListProducts from './pages/ListProducts/ListProducts'
import Phone from './common/Phone/Phone'
import PopUp from './common/PopUp/PopUp'
import ProductSlider from './pages/ProductDetails/ProductSlider' 
import ProductInfo from './pages/ProductDetails/ProductInfo'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import MainMenu from './common/Menu/MainMenu'

    const App =()=>  (
        <ThemeProvider theme={theme}>
        
            <CssBaseline />
            
                <Header />
                {/* <MainMenu /> */}
                
                 <Router>
                  <Switch>
                    <Route exact path="/" component={TopGrid}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/newsDetail" component={NewsDetails} />
                    <Route path="/service" component={Service} />
                    <Route path="/listProducts" component={ListProducts} />
                    <Route path="/about" component={About} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/productDetail" component={ProductDetails} />
                  </Switch>
                </Router>

                
                <Footer />
                
                <Phone />
                
                <PopUp />
        </ThemeProvider>
      );

export default App;


