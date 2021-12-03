import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Col from "./Col/Col";
import Form from "./Form/Form";
import medigranLogo from "../../assets/images/medigranLogo.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, YouTube} from '@material-ui/icons';
import SocialItem from "../Header/components/Social/components/SocialItem";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: 80,
    background: theme.palette.local.main,
  },
  link: {
    cursor: "pointer",
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
  const [acc, setAcc] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/products");
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setData(jsonResponse);
      }
      // console.log(jsonResponse.subcategory)
    };
    getData();
  }, [setData]);

  useEffect(() => {
    const getAcc = async () => {
      const res = await fetch("http://116.202.243.73:3000/accessories");
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.log(`Error while fetching data`);
      } else {
        setAcc(jsonResponse);
      }
      // console.log(jsonResponse.subcategory)
    };
    getAcc();
  }, [setAcc]);

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
              {data.map((item, key) => (
                <Link to={`/listProducts/${item.id}`}>
                  <Typography className={classes.link} variant="body2">
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </ul>
          </Col>
          <Col title="Аксессуары">
            {/* нужно будет поменять ссылку когда будет ссылка на лист аксессуаров */}
            <ul>
              {acc.map((item, key) => (
                <Link to={`/listProducts/${item.id}`}>
                  <Typography className={classes.link} variant="body2">
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </ul>
          </Col>
          <Col title="Ссылки">
            <ul>
              <Link to="/news">
                <Typography className={classes.link} variant="body2">
                  Новости
                </Typography>
              </Link>
              <Link to="/service">
                <Typography className={classes.link} variant="body2">
                  Сервисы
                </Typography>
              </Link>
              <Link to="/contacts">
                <Typography className={classes.link} variant="body2">
                  Контакты
                </Typography>
              </Link>
            </ul>
          </Col>
          <Col title="Социальные сети">
            <ul>
            <Grid container alignItems="center" justify="center">
              <SocialItem height="23px">
                <Instagram style={{ fontSize: 23 }} />
              </SocialItem>
              <SocialItem height="23px">
                <Facebook style={{ fontSize: 23, margin: "0 5px" }} />
              </SocialItem>
              <SocialItem height="30px">
                <YouTube style={{ fontSize: 30 }} />
              </SocialItem>
              </Grid>
            </ul>
          </Col>
          <Grid
            container
            justify="space-around"
            style={{ margin: "50px 0 20px 0" }}
          >
            <Col sizeXs={12} sizeSm={12} sizeMd={2}>
              <Link to="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Terms & Conditions
                </Typography>
              </Link>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={2}>
              <Link to="#">
                <Typography variant="body2" className={classes.privacyLink}>
                  Privacy Policy
                </Typography>
              </Link>
            </Col>
            <Col sizeXs={12} sizeSm={12} sizeMd={5}>
              <Link
                to="https://www.medigran.com/"
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
              </Link>
            </Col>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
