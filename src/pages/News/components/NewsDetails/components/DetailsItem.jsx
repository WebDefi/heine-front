import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newsDetail from "../../../../../assets/images/newsDetail.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

export default function DetailsItem({ image, title, subtitle }) {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Link to="/newsDetail">
            <img src={image}></img>
          </Link>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" style={{ padding: "15px 0 30px 0" }}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
