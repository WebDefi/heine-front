// import React, { useState,useEffect } from 'react';
// import { Container, Grid } from '@material-ui/core';
// import Item from '../Products/components/Card/components/Item/Item'
// import SubHeader from '../../common/SubHeader/SubHeader';

// export default function AccessoriesList( )  {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch('http://116.202.243.73:3000/accessories/accessorySubcategory/');
//       const jsonResponse = await res.json();
//       console.log(jsonResponse);
//       setData(jsonResponse);

//     };

//     getData();
//   }, [setData]);

//   return (
//       <div >
//         <SubHeader/>
//           <Container fluid>
//               <Grid container justify="space-around" spacing={6} style={{padding:"65px 0"}}>
//                   {data.map((item) => {
//                     return <Item key={item.id} link="/productDetail" size={4} image={item.pictureUrl} title={item.nameRu} subtitle={item.titleRu} />
//                   })}

//               </Grid>

//           </Container>
//           <hr></hr>
//       </div>

//   );
// };
