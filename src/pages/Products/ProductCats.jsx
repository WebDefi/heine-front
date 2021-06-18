import React, { useState, useEffect } from "react";
import { Grid, Link, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "./components/Card/components/Item/Item";
// import SubHeader from '../../common/SubHeader/SubHeader'
import dermatologyCategory from "../../assets/images/category1.jpg";
import dermatoscopesCategory from "../../assets/images/category2.jpg";
import SubHeader from "../../common/SubHeader/SubHeader";

const useStyles = makeStyles((theme) => ({
  productsSection: {
    background: theme.palette.white.main,
    padding: "70px 0",
  },
}));

// http://116.202.243.73:3000/products
// аксессуары
// http://116.202.243.73:3000/accessories
export default function ProductCats() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products");
      const jsonResponse = await res.json();
      setData(jsonResponse);
    };

    getData();
  }, []);

  return (
    <div>
      <SubHeader />
      <div className={classes.productsSection}>
        <Container fluid>
          <Grid container justify="space-around" spacing={6}>
            {data.map((data) => {
              return (
                <Item
                  key={data.id}
                  link="/listProducts"
                  size={6}
                  image={data.pictureUrl}
                  title={data.nameRu}
                  subtitle={data.titleRu}
                />
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
