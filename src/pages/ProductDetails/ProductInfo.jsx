import React, { useState } from "react";
import { Grid, Link, Container, Typography } from "@material-ui/core";
import ProductInfoItem from "./components/ProductInfoItem";
import ProductInfoConfiguration from "./components/ProductInfoConfiguration";



export default function ProductInfo({ prodTitle, prodArticle }) {
  return (
    <Grid item xs={6}>
     
      <Typography variant="h5" style={{ fontWeight: "600", paddingTop: 50 }}>
        {prodTitle}
      </Typography>
      <Typography variant="body1" style={{ paddingTop: 10, paddingBottom: 50 }}>
        {prodArticle}
      </Typography>
      <ProductInfoItem />
      <ProductInfoConfiguration />
    </Grid>
  );
}
