import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/Card/Card";
import serviceLeft from "../../assets/images/serviceLeft.svg";
import serviceRight from "../../assets/images/serviceRight.svg";
import Icon from "./components/svg/Icon";
import SubHeader from "../../common/SubHeader/SubHeader";
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  leftImg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  rightImg: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  serviceSection: {
    background: theme.palette.white.main,
  },
  serviceRequestTitle: {
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 13,
    },
  },
  serviceRequest: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 13,
    },
  },
}));

export default function Products() {
  const classes = useStyles();
  return (
    <div>
      <SubHeader />
      <div className={classes.serviceSection}>
        <Container fluid>
          <Typography
            variant="h6"
            style={{ fontWeight: "500", paddingTop: 50 }}
          >
            Мы стремимся предоставить вам самые лучшие продукты и услуги.
          </Typography>
          <Typography
            variant="body1"
            style={{ paddingTop: 10, paddingBottom: 50 }}
          >
            Наше стремление поставлять продукцию высокого качества также
            включает в себя исключительный уровень обслуживания и поддержки.
            Предоставление надежных советов и несложной помощи - это то, что
            ценят наши клиенты во всем мире.
          </Typography>
          <Grid
            container
            justify="space-around"
            spacing={6}
            style={{ paddingBottom: 50 }}
          >
            <Card
              title="ОБЩИЕ ВОПРОСЫ"
              subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»."
            >
              <img className={classes.leftImg} src={serviceLeft}></img>
              <img className={classes.rightImg} src={serviceRight}></img>
            </Card>
            <Card
              title="ЗАГРУЗКИ"
              subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»."
            >
              <img className={classes.leftImg} src={serviceLeft}></img>
              <img className={classes.rightImg} src={serviceRight}></img>
            </Card>
            <Card
              title="ВИДЕО КОНТЕНТ"
              subtitle="Эти часто задаваемые вопросы разработаны, чтобы помочь вам разобраться в общих процессах и структурах, связанных с HEINE, например, «Как найти партнера по распространению»."
            >
              <img className={classes.leftImg} src={serviceLeft}></img>
              <img className={classes.rightImg} src={serviceRight}></img>
            </Card>
          </Grid>
          <Link to="https://medigran.com/zayavka-na-viyizd_ua" style={{cursor:"pointer"}}>
            <Grid container style={{ paddingBottom: 50 }} alignItems="center">
              <Grid
                item
                xs={12}
                sm={2}
                md={1}
                xl={1}
                lg={1}
                className={classes.serviceRequest}
              >
                <Icon />
              </Grid>
              <Grid
                item
                xs={12}
                sm={10}
                md={11}
                xl={11}
                lg={11}
                className={classes.serviceRequest}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.serviceRequestTitle}
                >
                  Залиште заявку на виїзд нашого фахівця
                </Typography>
                <Typography variant="body2" className={classes.serviceRequest}>
                  Заповнивши спеціальну форму, Ви зможете легко, а головне
                  швидко, замовити послугу виїзду нашого фахівця до Вашого
                  складу або офісу.
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Container>
      </div>
    </div>
  );
}
