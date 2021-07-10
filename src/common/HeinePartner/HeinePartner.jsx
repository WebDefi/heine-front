import React from "react";
import { Grid, Link, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heinePartner from "../../assets/images/heinePartner.svg";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    right: 0,
    position: "absolute",
  },
  blue: {
    right: 3,
    top: 45,
    position: "absolute",

    height: 49,
    background: "rgba(0, 159, 253, 0.9)",
    borderRadius: "40px 40px 40px 40px",
    width:"39rem",
    [theme.breakpoints.only("sm")]: {
      width:"55rem"
    },
    [theme.breakpoints.only("xs")]: {
      width:"35rem"
    },
    [theme.breakpoints.only("md")]: {
      width:"35rem"
    },
  },
  yellow: {
    right: 3,
    top: 53,
    position: "relative",

    height: 49,
    background: "rgba(254, 197, 43, 0.9)",
    borderRadius: "40px 40px 40px 40px",
    width:"39rem",
    [theme.breakpoints.only("sm")]: {
      width:"55rem"
    },
    [theme.breakpoints.only("md")]: {
      width:"35rem"
    },
  },
  white: {
    position: "relative",

    height: 49,
    background: "#fff",
    borderRadius: "40px 40px 40px 40px",
    width:"39rem",
    [theme.breakpoints.only("sm")]: {
      width:"45rem"
    },
    [theme.breakpoints.only("sm")]: {
      width:"55rem"
    },
    [theme.breakpoints.only("md")]: {
      width:"35rem"
    },
  },
  content: {
    position: "relative",
    top: 5,
  },
  heinePartnerMobile: {
    position: "relative",
    bottom: 125,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      top: 230,
    },
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  }
}));

export default function HeinePartner({
}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.heinePartnerMobile}>
      <div className={classes.wrapper}>
        <div className={classes.blue}></div>
        <div className={classes.yellow}></div>
        <div className={classes.white}>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.content}
          >
            <Grid item xs={9}>
              <Typography>Официальный представитель Heine в Украине</Typography>
            </Grid>
            <Grid item xs={2}>
              <img src={heinePartner}></img>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
