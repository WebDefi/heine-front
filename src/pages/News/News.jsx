import React, { useState, useEffect } from "react";
import { Grid, Link, Container } from "@material-ui/core";
import NewsItem from "./components/NewsItem";
import SubHeader from "../../common/SubHeader/SubHeader";

// http://116.202.243.73:3000/news

export default function News() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://116.202.243.73:3000/news");
      const jsonResponse = await res.json();
      setData(jsonResponse);
    };

    getData();
  }, []);
  return (
    <div style={{ background: "#fff" }}>
      <SubHeader />
      <Container style={{ padding: "80px 0" }}>
        <Grid container spacing={10}>
          {data.map((data) => {
            return (
              <NewsItem
                key={data.id}
                title={data.title}
                subtitle={data.text}
                image={data.imageUrl}
                article="Новости Heine"
                link="/newsDetail"
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
