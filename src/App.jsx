import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme'
import { ThemeProvider } from "@material-ui/core/styles";
// import GridComponents from './components/Grid/GridComponents'
import NameForm from './common/FooterInput/NameForm'
import styles from './styles/styles.module.css'
// import Footer from './components/Footer/Footer'
// import Products from './components/Products/Products'
import Products from './pages/Products/Products'
import Service from './pages/Service/Service'
import TopGrid from './components/TopGrid/TopGrid'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import ProductItems from './components/TopGrid/components/ProductItems'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import HeineForm from './common/HeineForm/HeineForm'
import News from './pages/News/News'
import NewsDetails from './pages/News/components/NewsDetails/NewsDetails'
import SubMenu from './components/Header/components/SubMenu/SubMenu'
import ListProducts from './pages/ListProducts/ListProducts'
import ProductList from './components/TopGrid/components/ProductItems';
    const App =()=>  (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Header />
                {/* <ListProducts />  */}
                {/* <TopGrid /> */}
                {/* <Service /> */}
                {/* <Products />
                <News />
                <NewsDetails />
                
                <Contacts /> */}
                {/* <SubMenu />  */}
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
                  </Switch>
                     
                    
                  

                </Router>
                <Footer />
        </ThemeProvider>
      );

export default App;


