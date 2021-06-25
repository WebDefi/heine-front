import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductInfo from "./ProductInfo";
import ProductSlider from "./ProductSlider";

// http://116.202.243.73:3000/products/product
//acc
// http://116.202.243.73:3000/accessories/accessorySubcategory/

export default function ProductDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
      console.log(jsonResponse.subcategories);
    };

    getData();
  }, [setData]);

  return (
    <div>
      <SubHeader />
      <div style={{ background: "#fff" }}>
        <Container fluid>
          <Grid container>
            <ProductSlider />
            <ProductInfo prodTitle="prodTitle" prodArticle="prodArticle" />
          </Grid>
        </Container>
      </div>
    </div>
  );
}
