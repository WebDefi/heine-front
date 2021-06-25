import React from "react";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import ProductCats from "./pages/Products/ProductCats";
import Service from "./pages/Service/Service";
import TopGrid from "./components/TopGrid/TopGrid";
import Footer from "./components/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import styles from "./styles/styles.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/components/NewsDetails/NewsDetails";
import ListProducts from "./pages/ListProducts/ListProducts";
import Phone from "./common/Phone/Phone";
import PopUp from "./common/PopUp/PopUp";
import ProductSlider from "./pages/ProductDetails/ProductSlider";
import ProductInfo from "./pages/ProductDetails/ProductInfo";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MainMenu from "./common/Menu/MainMenu";
import AccessoriesList from "./pages/AccessoriesList/AccessoriesList";
import AcessoriesCats from "./pages/AccessoriesCats/AccessoriesCats";

// стейтлифтинг

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={TopGrid} />
        <Route path="/Категории Продуктов" component={ProductCats} />
        <Route path="/Категории Аксессуаров" component={AcessoriesCats} />
        <Route path="/Новости" component={News} />
        <Route path="/Контакты" component={Contacts} />
        <Route path="/Пост" component={NewsDetails} />
        <Route path="/Сервисы" component={Service} />
        <Route path="/Список Продуктов" component={ListProducts} />
        <Route path="/Список Аксессуаров" component={AccessoriesList} />
        <Route path="/О нас" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/Детали Продукта" component={ProductDetails} />
      </Switch>
    </Router>
    <Footer />
    <Phone />
    <PopUp />
  </ThemeProvider>
);

export default App;
