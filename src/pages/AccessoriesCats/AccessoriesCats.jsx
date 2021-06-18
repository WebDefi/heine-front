import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../Products/components/Card/components/Item/Item";
import SubHeader from "../../common/SubHeader/SubHeader";

const useStyles = makeStyles((theme) => ({
  accessorySection: {
    background: theme.palette.white.main,
    padding: "70px 0",
  },
}));

export default function AcessoriesCats() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/accessories");
      const jsonResponse = await res.json();
      setData(jsonResponse);
    };

    getData();
  }, []);

  return (
    <div>
      <SubHeader />
      <div className={classes.accessorySection}>
        <Container fluid>
          <Grid container justify="space-around" spacing={6}>
            {data.map((data) => {
              return (
                <Item
                  key={data.id}
                  link="/listAccessories"
                  size={6}
                  image={data.pictureUrl}
                  title={data.nameRu}
                  subtitle={data.titleRu}
                />
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
