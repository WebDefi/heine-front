import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Preloader from "./common/Preloader/Preloader";
import NotFound from "./common/notFound/notFound";

const TopGrid = lazy(() => import('./components/TopGrid/TopGrid'));
const ProductCats = lazy(() => import('./pages/Products/ProductCats'));
const AcessoriesCats = lazy(() => import('./pages/AccessoriesCats/AccessoriesCats'));
const News = lazy(() => import('./pages/News/News'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NewsDetails = lazy(() => import('./pages/News/components/NewsDetails/NewsDetails'));
const Service = lazy(() => import('./pages/Service/Service'));
const ListProducts = lazy(() => import('./pages/ListProducts/ListProducts'));
const AccessoriesList = lazy(() => import('./pages/AccessoriesList/AccessoriesList'));
const About = lazy(() => import('./pages/About/About'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

export const getRoutes = () => {
  return (
  <Suspense fallback={<Preloader />}>  
  <Switch>
    <Route exact path="/" component={TopGrid} />
    <Route path="/productCats/" component={ProductCats} />
    <Route path="/acessoriesCats" component={AcessoriesCats} />
    <Route path="/news" component={News} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/newsDetail" component={NewsDetails} />
    <Route path="/service" component={Service} />
    <Route path="/listProducts" component={ListProducts} />
    <Route path="/listAccessories" component={AccessoriesList} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/productDetail" component={ProductDetails} />
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
  </Suspense>
  )}
