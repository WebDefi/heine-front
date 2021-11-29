import React from "react";
import {
  Grid,
  Link,
  Container,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Info from "./components/Info/Info";
import Adress from "./components/Info/components/Adress/Adress";
import SubHeader from "../../common/SubHeader/SubHeader";
import Form from "../Contacts/components/Form/Form";
import mapp from "../../assets/images/mapp.svg";
import faks from "../../assets/images/faks.svg";
import phone from "../../assets/images/phone.svg";
import plane from "../../assets/images/plane.svg";


export default function Contacts() {
  return (
    <div>
      <SubHeader />
      <Container fluid>
        <Grid container justify="space-around" spacing={6}>
          <Info
            size={6}
            subtitle1="У вас есть вопросы, предложения, хотите что-то заказать или отправить нам предложение? Тогда напишите нам!"
            //subtitle2="sadasdasd"
          ></Info>
          <Grid item xs={6}>
            <Grid container>
              <Adress size={6} title="Адрес:" article="03035, г. Киев, ул. Льва Толстого, 63" img={mapp} />
              <Adress size={6} title="E-Mail:" article="office@medigran.com" img={faks} />
              <Adress size={6} title="Телефон:" article="+38 (067) 824-85-04" img={phone} />
              <Adress size={6} title="Факс:" article="+38 (097) 064-73-52" img={plane} />
            </Grid>
          </Grid>

          <Form title="Заполните форму" size={12} />
        </Grid>
      </Container>
      <iframe
        style={{ border: "none", marginTop: 80 }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22050.16573887866!2d30.661268899999996!3d46.3044608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1620511658488!5m2!1sru!2sua"
        width="100%"
        height="450"
        border="none"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
