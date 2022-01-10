import React, { useState, useEffect} from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductItem from './ProductItem'
import { useParams } from "react-router-dom";
export default function ListProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      console.log("res:", res);
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
    };

    getData();
  }, [setData]);
   console.log("productsdata:", data);

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
          {data.map((subcat) => 
            subcat.products.map((item) => {
            return (
              <ProductItem
                key={item.id}
                link={`/productDetail/${item.name}`}
                sizeXs={12}
                sizeSm={6}
                suzeMd={4}
                image={item.pictureUrl}
                title={item.name}
                subtitle={item.title}
              />
            );
          }))}
        </Grid>
      </Container>
      <hr></hr>
    </div>
  );
}


