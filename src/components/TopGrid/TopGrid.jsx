import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Item from "./components/Item/Item";
import OrangeBtn from "../../common/Btns/OrangeBtn";
import LightOutlineBtn from "../../common/Btns/LightOutlineBtn";
import DarkOutlineBtn from "../../common/Btns/DarkOutlineBtn";
import HeineForm from "../../common/HeineForm/HeineForm";
import services from "../../assets/images/services.png";
import heine from "../../assets/images/heine.png";
import warrantyBg from "../../assets/images/garant.png";
import contacts from "../../assets/images/contacts.png";
import map from "../../assets/images/MAP.svg";
import aboutUs from "../../assets/images/aboutUs.png";
import Slider from "../Slider/Slider";
import BottomGrid from "../TopGrid/components/Item/BottomGrid";


export default function TopGrid() {

  const [categoryTree, setCategoryTree] = useState([]);

  const gridSizes = [
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 8},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 6},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 6},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4},
    {sizeXs: 12, sizeSm: 6, sizeMd: 6, sizeLg: 4}
  ];

  useEffect(() => {
    const getData = async () => {      
      let catTree = [];
      const resCategories = await fetch(`http://116.202.243.73:3000/products/`);            
      if(!resCategories.status === 200) {
        console.log('Error while fetching data');
      } else {
        const categories = await resCategories.json();
        for ( const { id: catId, name_ru: catName, pictureUrl } of categories) {          
          const resSubCategories = await fetch(`http://116.202.243.73:3000/products/category/${catId}`);
          if(!resSubCategories.status === 200) {
            console.log('Error while fetching data');
          } else {
            const subCategories = await resSubCategories.json();
            catTree.push({
              id: catId, name: catName, pictureUrl,
              subCategories: subCategories.subcategories.map(({ subcategory }) => ({id: subcategory.id, name: subcategory.name_ru}))
            });
            setCategoryTree(catTree);
          }
        }
      }
    };

    getData();    
  }, []);  

  console.log(categoryTree);

  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "70px", marginBottom: "6px" }}
    >
      <Slider />
      {categoryTree.map((category, key) => (
      <Item
        sizeXs={gridSizes[key].sizeXs}
        sizeSm={gridSizes[key].sizeSm}
        sizeMd={gridSizes[key].sizeMd}
        sizeLg={gridSizes[key].sizeLg}
        title={category.name}
        image={category.pictureUrl}        
        key={key}
      >
        <ul>
          {category.subCategories.map((subCat, key) => (
            <li><Link to={`/listProducts/${subCat.id}`}>{subCat.name}</Link></li>  
          ))}
        </ul>
        <OrangeBtn link={`/productCats/${category.id}`} buttonText="Подробнее"></OrangeBtn>
      </Item>
      ))}
      
      <HeineForm />
      <Item
        sizeXs={12}
        sizeSm={6}
        sizeMd={6}
        sizeLg={4}
        bigTitle="Новости"
        subtitle="Новинки и интересные факты от HEINE."
        image={map}
        text="some"
        bgcolor="#EE5F22"
      >
        <LightOutlineBtn link="/news" buttonText="something" />
      </Item>
      <Item
        sizeXs={12}
        sizeSm={6}
        sizeMd={6}
        sizeLg={4}
        title="О НАС"
        imageCenter={aboutUs}
        text="some"
        subtitle="Кое-что интересное о прошлом, настоящем и будущем."
        contrast="#444"
      >
        <DarkOutlineBtn link="/about" buttonText="something" />
      </Item>
      <Item
        sizeXs={12}
        sizeSm={12}
        sizeMd={12}
        sizeLg={4}
        bigTitle="HEINE"
        subtitle="Станьте частью нас!"
        image={heine}
        text="some"
        bgcolor="#EE5F22"
      >
        <LightOutlineBtn buttonText="something" />
      </Item>
      <BottomGrid
        sizeXs={12}
        sizeSm={6}
        sizeMd={6}
        sizeLg={4}
        title="СЕРВИСЫ"
        image={services}
        text="some"
        gridheight="300px"
      >
        <DarkOutlineBtn link="/service" buttonText="something" />
      </BottomGrid>
      <BottomGrid
        sizeXs={12}
        sizeSm={6}
        sizeMd={6}
        sizeLg={4}
        image={warrantyBg}
        contrastTitle="Гарантия 5 лет"
        text="some"
        bgcolor="#EE5F22"
        gridheight="300px"
        subtitle="HEINE является мировым лидером в производстве инструментов для первичной диагностики с более чем 500 сотрудниками.
Более 70 лет компания находится в 100% семейном владении и управлении"
      >
        <LightOutlineBtn buttonText="something" />
      </BottomGrid>
      <BottomGrid
        sizeXs={12}
        sizeSm={12}
        sizeMd={12}
        sizeLg={4}
        title="Свяжитесь с нами"
        image={contacts}
        text="some"
        gridheight="300px"
      >
        <DarkOutlineBtn link="/contacts" buttonText="something" />
      </BottomGrid>
    </Grid>
  );
}
