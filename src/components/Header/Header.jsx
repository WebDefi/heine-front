import React from 'react';
import { useState } from "react";

import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import {AppBar,Grid,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/Logo.svg'
import Social from './components/Social/Social'
import Local from './components/Local/Local'
import MainMenu from '../../common/Menu/MainMenu'
import MenuLink from '../Header/components/Menu/components/MenuLink'

import './Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [levelsSatate, setLevelsSatate] = useState({
    catOpened: false,
    cat: null,
    subCatOpened: false,
    subCat: null
  });

  const menuTree = {
    "Дерматоскопы и Док": {
      "Дерматоскопы": {
        "Модель": "/products",
        "112": "#"
      },
      "12": {
        "121": "#",
        "122": "#",
        "123": "#"
      },
      "13": {
        "131": "#",
        "132": "#"
      }
    },
    "2": {
      "21": {
        "211": "#",
        "212": "#",
        "213": "#"
      },
      "22": {
        "221": "#",
        "222": "#",
        "223": "#"
      }
    }
  };
    return (
      <div>
       <AppBar color="secondary"  position="fixed" className='header'>
         <Toolbar> 
             <Grid container justify="space-around" alignItems="center">
               <Logo />
               
               <Grid item>
                <Grid container justify="center" spacing={2}>
                  <button className="navLink" onClick={() => setMenuOpened(!menuOpened)}>Продукция</button>
                  <button className="navLink" onClick={() => setMenuOpened(!menuOpened)}>Аксессуары</button>
                  <button className="navLink" onClick={() => setMenuOpened(!menuOpened)}>Новости</button>
                  <button className="navLink" onClick={() => setMenuOpened(!menuOpened)}>Сервис</button>
                  <button className="navLink" onClick={() => setMenuOpened(!menuOpened)}>Контакты</button>

                  {/* <MenuLink onClick={() => setMenuOpened(!menuOpened)} link="/products" text="Продукция"/>
                  <MenuLink link="/" text="Аксессуары"/>
                  <MenuLink link="/news" text="Новости"/>
                  <MenuLink link="/service" text="Сервис"/>
                  <MenuLink link="/contacts" text="Контакты"/>  */}
                  
    
              
                </Grid>
               </Grid>
               <Social/>
               {/* <Local /> */}
             </Grid>
             <div
        className={menuOpened ? "level-menu level-menu_opened" : "level-menu"}
      >
        <nav className="level-menu_level">
          {Object.keys(menuTree).map((cat, key) => (
            <li
              onClick={() =>
                setLevelsSatate({
                  catOpened: true,
                  cat,
                  subCatOpened: false,
                  subCat: null
                })
              }
              key={key}
            >
              {cat}
            </li>
          ))}
        </nav>
        {levelsSatate.catOpened ? (
          <nav className="level-menu_level">
            {Object.keys(menuTree[levelsSatate.cat]).map((subCat, key) => (
              <li
                onClick={() =>
                  setLevelsSatate({
                    ...levelsSatate,
                    subCatOpened: true,
                    subCat
                  })
                }
                key={key}
              >
                {subCat}
              </li>
            ))}
          </nav>
        ) : (
          ""
        )}
        {levelsSatate.subCatOpened ? (
          <nav className="level-menu_level">
            {Object.keys(menuTree[levelsSatate.cat][levelsSatate.subCat]).map(
              (item, key) => (
                <li>
                  <a
                    href={menuTree[levelsSatate.cat][levelsSatate.subCat][item]}
                    key={key}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </nav>
        ) : (
          ""
        )}
      </div>
            
         </Toolbar>
       
        </AppBar>
        
      {/* <MainMenu /> */}
     </div>
    );
  }







// export default function Header()  {
//   const classes = useStyles();
//   return (
//     
//   )
// };

 