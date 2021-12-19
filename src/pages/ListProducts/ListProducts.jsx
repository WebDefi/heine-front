import React, { useState, useEffect } from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductItem from './ProductItem'
export default function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products");
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
      console.log(jsonResponse);
    };

    getData();
  }, [setData]);

  return (
    <div>
      <SubHeader />
      <Container fluid>
        <Grid
          container
          justify="space-around"
          spacing={6}
          style={{ padding: "65px 0" }}
        >
          {data.map((item) => {
            return (
              <ProductItem
                key={item.subcategory.id}
                link="/productDetail"
                sizeXs={12}
                sizeSm={6}
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
