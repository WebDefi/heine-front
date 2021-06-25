import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContent: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  }
}));

export default function Content({ size = 12, sizeSm = 6, sizeMd = 6, article, children, image }) {
  const classes = useStyles();
  return (
    <Grid item xs={size} sm={sizeSm} md={sizeMd} className={classes.formContent}>
      <div>
        <img src={image}></img>
        {children}
      </div>
    </Grid>
  );
}
