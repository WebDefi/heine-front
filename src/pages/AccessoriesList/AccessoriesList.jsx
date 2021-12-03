import React, { useState,useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Item from '../Products/components/Card/components/Item/Item'
import SubHeader from '../../common/SubHeader/SubHeader';

export default function AccessoriesList( )  {
    
    const [data, setData] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const res = await fetch('http://116.202.243.73:3000/accessories/accessorySubcategory/1');
        const jsonResponse = await res.json();
        setData(jsonResponse);
      };
  
      getData();
    }, []);
  
  return (
      <div >
     
          <Container>
              <Grid container justify="space-around" spacing={6} style={{padding:"65px 0"}}>
              
                   <Item key={data.id} link="/productDetail" size={3} image={data.pictureUrl} title={data.name} subtitle={data.title} />
             
              </Grid>
          </Container>
        
        
      </div>

  );
};
