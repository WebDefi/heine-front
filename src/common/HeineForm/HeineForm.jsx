import React from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Container,
  TextField,
  InputLabel,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../HeineForm/form/Form";
import Content from "../HeineForm/content/Content";
import heineDistr from "../../assets/images/heineDistr.png";
import HEINE from "../../assets/images/heinedistr.svg";
import OrangeBtn from "../../common/Btns/OrangeBtn";
import LightOutlineBtn from "../../common/Btns/LightOutlineBtn";
import DarkOutlineBtn from "../../common/Btns/DarkOutlineBtn";
import HeinePartner from "../HeinePartner/HeinePartner";
const useStyles = makeStyles((theme) => ({
  heineForm: {
    height: 400,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.only("md")]: {
      height: 410,
    },
    [theme.breakpoints.only("sm")]: {
      height: 750,
    },
    [theme.breakpoints.only("xs")]: {
      height: 1000,
    },
  },
  input: {
    padding: 15,
  },
  findDistr: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: 400,
    backgroundColor: theme.palette.primary.main,
  },
  contentText: {
    color: theme.palette.primary.contrastText,
    paddingTop: 13,
    lineHeight: 1.8,
  },
}));

export default function HeineForm() {


  const [state, setState] = React.useState(0);
  const handleChange = (event) => {
    setState({value0: event.target.value});
  };
  const handleSubmit = (event) => {
    alert('Отправленное имя: ' + state.value0);
    event.preventDefault();
  }
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.heineForm}>
        <Container className={classes.findDistr}>
          <Grid container justify="space-between">
            <Form
              sizeXs={12}
              sizeSm={12}
              sizeMd={5}
              title="Найти дистибьютора"
              subtitle1="Вы заинтересованы в одном из наших продуктов?"
              subtitle2="Найдите ближайшего к вам дистрибьютора быстро и легко."
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  value={state.value0}
                  onChange={handleChange}
                  style={{ paddingTop: 20 }}
                  placeholder="Введите свою страну"
                  color="primary"
                  size="small"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  style={{ paddingTop: 10 }}
                  placeholder="Введите c"
                  color="primary"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
              </form>
              <OrangeBtn buttonText="Поиск" width="100%" padding="10px" />
            </Form>
            <Content sizeXs={12} sizeSm={12} sizeMd={6} image={HEINE} >
              <Typography
                variant="body1"
                component="p"
                className={classes.contentText}
              >
                HEINE Optotechnik является мировым лидером в производстве
                инструментов для первичной диагностики с более чем 500
                сотрудниками. На протяжении более 70 лет компания HEINE
                Optotechnik находится в 100% семейном владении и управлении. Мы
                продолжаем разрабатывать и производить инструменты HEINE на
                наших предприятиях в Германии, где мы сочетаем многолетний опыт
                и мастерство с самыми современными производственными
                технологиями.
              </Typography>
              
            </Content>

          </Grid>
          
        </Container>
        <Container>
          <Grid container>
            <HeinePartner/> 
          </Grid>
        </Container>
      </Paper>
    </Grid>
  );
}
