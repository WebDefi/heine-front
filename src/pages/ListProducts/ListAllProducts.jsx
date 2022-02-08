import React, { useState, useEffect} from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import SubHeader from "../../common/SubHeader/SubHeader";
import ProductItem from './ProductItem'
import { useParams } from "react-router-dom";
import { HOST } from "../../routes";
export default function ListProducts() {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [subCatPaths, setSubCatPaths] = useState({});

  const { categoryId, subCatId } = useParams();
  console.log('LIST PRODUCTS', categoryId, subCatId);

  useEffect(() => {
    const getData = async () => {
      const url = `${HOST}/products/category/${categoryId}`;
      const res = await fetch(url);
      console.log("res:", res);
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      const respCatId = jsonResponse.category.id;
      const productsData = subCatId ? jsonResponse.subcategories.filter((subcat) => subcat.subcategory.id == subCatId) : jsonResponse.subcategories;
      const subCatPaths = jsonResponse.subcategories.map(
        (subcat) => (
          {
            path: `/listProducts/category/${respCatId}/subCategory/${subcat.subcategory.id}`,
            text: subcat.subcategory.name,
            active: subcat.subcategory.id == subCatId
          }
        )
      );
      subCatPaths.unshift({text: jsonResponse.category.name, path: `/listProducts/category/${respCatId}`, active: !subCatId});
      const categoryData = subCatId ? productsData[0].subcategory : jsonResponse.category
      setData(productsData);
      setSubCatPaths(subCatPaths); 
      setCategoryData(categoryData);
    };

    getData();
  }, [categoryId, subCatId]);
   console.log("productsdata:", data);
   console.log(subCatPaths);


  return (
    <div>
      <SubHeader pathItems={["Продукція", categoryData.name]} title={categoryData.name} subTitle={categoryData.title} subLinks={subCatPaths} />
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


