import React, {useEffect,useState} from 'react';
import { Grid, Link, Container } from '@material-ui/core';
import SubHeader from '../../../../common/SubHeader/SubHeader'
import DetailsItem from './components/DetailsItem'
// http://116.202.243.73:3000/news/1
export default function NewsDetails()  {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://116.202.243.73:3000/news/1');
      const jsonResponse = await res.json();
      setData(jsonResponse);
    };

    getData();
  }, []);
  return (
      <div style={{background:"#fff"}}>
      <SubHeader />
        <Container style={{paddingTop:"40px"}}>
            <Grid container justify="center" >
                {data.map((data) =>{
                  return <DetailsItem title={data.title} subtitle={data.text} image={data.imageUrl}/>
                })}
            </Grid>
        </Container>
    </div>
  );
};
