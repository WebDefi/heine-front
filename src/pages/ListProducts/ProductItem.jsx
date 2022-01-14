import React, { useState, useEffect } from "react";
import { Grid, Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRight from "../Products/components/Card/components/Item/ArrowRight"
import { Link } from "react-router-dom";

// http://116.202.243.73:3000/products/category/1
// acc
// accessories/accessoryCategory/

const useStyles = makeStyles((theme) => ({
  cardContent: {
    height: '8em',
    display: 'flex',
    alignItems: 'center',
    borderTop: theme.palette.borderMain.main,
    position: "absolute",
    bottom: 0,
    zIndex: 3,
    background: theme.palette.cardBlur.main,
    backdropFilter: " blur(41px)",
    "&:hover": {
      transition: "all 0.3s ease",
      borderTop: theme.palette.mainBtnBorder.main,
    },
  },
  categoryBlock: {
    height: 437,
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    overflow: "hidden",
    marginTop: theme.spacing(1),
    outline: theme.palette.borderMain.main,
    "&:hover": {
      transition: "all 0.3s ease",
      outline: theme.palette.mainBtnBorder.main,
    },
  },
  cardImage: {
    position: "relative",
    margin: "0 auto",
    display: "block",
    width: "100%",
  },
  categoryContentText: {
    padding: "23px 0 23px 23px",
  },
  cardTitle: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function Item({
  sizeXs = 12,
  sizeSm = 4,
  sizeMd = 4,
  title,
  subtitle,
  image,
  display,
  link,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={sizeXs} sm={sizeSm} md={sizeMd}>
      <Link to={link}>
        <Paper className={classes.categoryBlock}>
          <img className={classes.cardImage} src={image}></img>
          <Grid container className={classes.cardContent}>
            <Grid item className={classes.categoryContentText}>
              <Grid container alignItems="center">
                <Grid item xs={11}>
                  <Typography variant="subtitle1" className={classes.cardTitle}>
                    {title}
                  </Typography>
                  <Typography variant="body1">{subtitle}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <ArrowRight display={display} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
}
