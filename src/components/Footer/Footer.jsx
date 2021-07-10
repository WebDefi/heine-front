import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Col from "./Col/Col";
import Form from "./Form/Form";
import medigranLogo from "../../assets/images/medigranLogo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: 80,
    background: theme.palette.local.main,
  },
  link: {
    cursor: 'pointer',
    color: theme.palette.secondary.contrastText,
    padding: "5px",
    "&:hover": {
      transition: "all 0.3s ease",
      width: "100%",
      background: theme.palette.footerLinkHover.main,
      borderRadius: "7px",
    },
  },
  privacyLink: {
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      transition: "all 0.3s ease",
      color: theme.palette.primary.main,
    },
  },
  footerContent: {
    transition: "all 0.3s ease",
    borderTop: theme.palette.footerBorder.main,
    paddingTop: 40,
  },
}));

export default function Footer() {
  const classes = useStyles();
  //http://116.202.243.73:3000/products/menu

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products/menu");      
      const jsonResponse = await res.json();
      if(!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setData(jsonResponse);
      }
      // console.log(jsonResponse.subcategory)
    };
    getData();
  }, [setData]);

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid
          container
          spacing={3}
          justify="center"
          className={classes.footerContent}
        >
          <Form title="Нужна помощь в подборе оборудования?" />
          <Col title="Продукция">
            <ul>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
            </ul>
          </Col>
          <Col title="Продукция">
            <ul>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
            </ul>
          </Col>
          <Col title="Продукция">
            <ul>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
            </ul>
          </Col>
          <Col title="Продукция">
            <ul>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
              <Typography className={classes.link} variant="body2">
                ЛОР-инструменты
              </Typography>
            </ul>
          </Col>
          <Grid
            container
            justify="space-around"
            style={{ margin: "50px 0 20px 0" }}
          >
            <Col sizeXs={12} sizeSm={12} sizeMd={2}>
              <a href="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Terms & Conditions
                </Typography>
              </a>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={2}>
              <a href="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Privacy Policy
                </Typography>
              </a>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={5}>
              <a
                href="https://www.medigran.com/"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} sm={9}>
                    <Typography
                      variant="body2"
                      align="center"
                      className={classes.privacyLink}
                    >
                      Официальный представитель Heine в Украине
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={3}>
                    <img src={medigranLogo} style={{ paddingLeft: 20 }}></img>
                  </Grid>
                </Grid>
              </a>
            </Col>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
