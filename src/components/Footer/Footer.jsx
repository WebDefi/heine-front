import React from "react";
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
          <Grid container justify="space-around" style={{ margin: "50px 0 20px 0" }}>
            <Col sizeXs={12} sizeSm={12} sizeMd={4}>
              <a href="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Terms & Conditions
                </Typography>
              </a>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={4}>
              <a href="#">
                 
                <Typography variant="body2" className={classes.privacyLink}>
                  Privacy Policy
                </Typography>
              </a>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={4}>
              <a href="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Официальный представитель Heine в Украине
                </Typography>
              </a>
            </Col>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
