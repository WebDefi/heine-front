import React, { useState, useEffect} from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductItem from './ProductItem'
import { useParams } from "react-router-dom";
import { HOST } from "../../routes";
export default function ListProducts() {
  const [data, setData] = useState([]);

  const { categoryId, subCatId } = useParams();
  console.log('LIST PRODUCTS', categoryId, subCatId);

  useEffect(() => {
    const getData = async () => {
      const url = subCatId ? `${HOST}/products/subcategory/${subCatId}` : `${HOST}/products/category/${categoryId}`;
      const res = await fetch(url);
      console.log("res:", res);
      const jsonResponse = await res.json();
      setData(jsonResponse.subcategories ? jsonResponse.subcategories : [jsonResponse]);
    };

    getData();
  }, [categoryId, subCatId]);
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
                productId={item.id}
                link={`/productDetail/${item.name}`}
                sizeXs={12}
                sizeSm={6}
                suzeMd={4}
                image={item.documents[0]}
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


