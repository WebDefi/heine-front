import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Palette } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProductInfoItem({ size = 12 }) {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/category/1");
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setData(jsonResponse.subcategories);
      }
    };
    getData();
  }, [setData]);
  return (
    <Grid item xs={size}>
      <Grid
        container
        style={{ border: "2px solid #C1C4C5", borderRadius: "10px" }}
        direction="row"
      >
        <Grid item xs={12}>
          <Typography style={{ padding: "3px 10px" }}>#1</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderTop: "2px solid #C1C4C5", padding: "3px 10px" }}
        >
          <Typography>#2</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderTop: "2px solid #C1C4C5", padding: "3px 10px" }}
        >
          <Link style={{ float: "right", color: "#EE5F22" }} to="/">
            link
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
