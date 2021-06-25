import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: theme.palette.white.main,
    padding: 45,
    textAlign: "center",
    [theme.breakpoints.only("sm")]: {
      marginTop: 280,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 550,
    },
  },
}));

export default function Form({
  sizeXs,
  sizeSm,
  sizeMd,
  children,
  title,
  subtitle1,
  subtitle2,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={sizeXs} sm={sizeSm} md={sizeMd} className={classes.formFix}>
      <div className={classes.form}>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {subtitle1}
        </Typography>
        <Typography variant="body2" component="p">
          {subtitle2}
        </Typography>
        {children}
        {/* <Distr/> */}
      </div>
    </Grid>
  );
}
