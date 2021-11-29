import React, { useState, useEffect } from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";

import ProductItem from "../ListProducts/ProductItem";
export default function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
      console.log(jsonResponse);
    };

    getData();
  }, [setData]);

  return (
    <div style={{ backgroundColor: "#DFE1E0" }}>
      <Container fluid >
        <Grid
          container
          justify="space-around"
          spacing={1}
          style={{ margin: "130px 0", padding: "70px 0"}}
        >
          {data.map((item) => {
            return (
              <ProductItem
                key={item.subcategory.id}
                link={`/productDetail/${item.subcategory.name}`}
                sizeXs={4}
                sizeSm={4}
                suzeMd={4}
                image={item.subcategory.pictureUrl}
                title={item.subcategory.name}
                subtitle={item.subcategory.title}
              />
            );
          })}
        </Grid>
      </Container>
      <hr></hr>
    </div>
  );
}
