import React, { useState, useEffect } from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import Item from "../Products/components/Card/components/Item/Item";
import SubHeader from "../../common/SubHeader/SubHeader";

export default function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories);
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
              <Item
                key={item.subcategory.id}
                link="/productDetail"
                sizeXs={12}
                sizeSm={6}
                suzeMd={4}
                image={item.subcategory.pictureUrl}
                title={item.subcategory.nameRu}
                subtitle={item.subcategory.titleRu}
              />
            );
          })}
        </Grid>
      </Container>
      <hr></hr>
    </div>
  );
}
