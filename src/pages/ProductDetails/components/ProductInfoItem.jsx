import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Palette } from "@material-ui/icons";

export default function ProductInfoItem({ size = 12 }) {
  return (
    <Grid item xs={size}>
      <Grid
        container
        style={{ border: "2px solid #C1C4C5", borderRadius: "10px" }}
        direction="row"
      >
        <Grid item xs={12}>
          <Typography style={{ padding: "3px 10px" }}>asds</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderTop: "2px solid #C1C4C5", padding: "3px 10px" }}
        >
          <ul>
            <li>asdss</li>
            <li>asdss</li>
            <li>asdss</li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderTop: "2px solid #C1C4C5", padding: "3px 10px" }}
        >
          <a style={{ float: "right", color: "#EE5F22" }} href="/">
            link
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
