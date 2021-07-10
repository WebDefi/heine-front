import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import newsImg from "../../../assets/images/newsImg.jpg";
import newImgBg from "../../../assets/images/newsImgBg.svg";
import { Link } from "react-router-dom";

// http://116.202.243.73:3000/news/1

const useStyles = makeStyles((theme) => ({
  newsItemImg: {
    padding: "16px 14px",
    position: "absolute",
  },
  ImgBg: {
    position: "relative",
  },
  newsCaption: {
    textAlign: "center",
    background: theme.palette.newsCaption.main,
    padding: "2px 10px",
    borderRadius: 60,
    color: theme.palette.darkerText.main,
  },
  postImage: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  postContent: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default function NewsItem({ image, title, subtitle, article, link }) {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} xl={3} lg={3}>
          <div className={classes.postImage}>
            <Link to="/newsDetail">
              <img src={newsImg} className={classes.newsItemImg}></img>
            </Link>
            <img src={newImgBg} className={classes.newsItemBg}></img>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          xl={9}
          lg={9}
          className={classes.postContent}
        >
          <div>
            <Typography className={classes.newsCaption} variant="caption">
              {article}
            </Typography>
            <Link to="/">
              <Typography variant="h5">{title}</Typography>
            </Link>
            <Typography variant="body2" style={{ padding: "15px 0 30px 0" }}>
              {subtitle}
            </Typography>
            <Link to={link} to={link} component="Link">
              Узнать больше
            </Link>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
