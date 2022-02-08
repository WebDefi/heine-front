import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductInfo from "./ProductInfo";
import ProductSlider from "./ProductSlider";
import AccessoriesList from '../AccessoriesList/AccessoriesList';
import ProductsRecomendations from './ProductsRecomendations';

// http://116.202.243.73:3000/products/product
//acc
// http://116.202.243.73:3000/accessories/accessorySubcategory/

export default function ProductDetails() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setData(jsonResponse.category);
      }
      console.log("categories:",jsonResponse.category);
    };
    getData();
  }, [setData]);
  return (
    <div>
      <SubHeader pathItems={[data.name]} />
      
      <div style={{ background: "#fff" }}>
        <Container>
          <Grid container>
            <ProductSlider />
            <ProductInfo prodTitle={data.name} prodArticle={data.title} />
          </Grid>
        </Container>
        <ProductsRecomendations />
      </div>
     
    </div>
  );
}
