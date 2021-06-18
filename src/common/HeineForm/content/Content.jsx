import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Content({ size = 6, article, children, image }) {
  const classes = useStyles();
  return (
    <Grid item xs={size}>
      <div>
        <img src={image}></img>
        {children}
      </div>
    </Grid>
  );
}
