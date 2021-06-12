import React from 'react';
import { useState } from "react";

import Logo from './components/Logo/Logo'
import { AppBar,Grid,Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from './components/Social/Social'
 
import './Header.css'


const useStyles = makeStyles(theme => ({
  header: {
    borderBottom: theme.palette.headerBottom.main,
    height:'7.5em',
  },
  levelMenu: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100vw',
    backgroundColor: theme.palette.local.main,
    top: '7.5em',
    left: 0,
    height: 0,
    overflow: 'hidden',
    transition: '0.4s height',
  },
  levelMenuOpened: {
    height: '8em',
  },
  levelMenuLevel: {
    listStyle: 'none',
    padding: '0.8em',
    borderLeft: theme.palette.headerBorder.main,
  },
  navLink: {
    color:theme.palette.lightGray.main,
    "&:hover": {
      transition: 'all 0.5s ease',
      borderRadius: 7,
      background:theme.palette.footerLinkHover.main,
      color:'#fff',
    }
  },
  menuLink: {
    border: 'none',
    background: 'none',
    color:'#fff',
    '&:hover': {
      color:theme.palette.primary.main,
      transition: 'all 0.3s ease',
    }
  }



}));

export default function Header() {
  const classes = useStyles();

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
       <AppBar color="secondary"  position="fixed" className={classes.header}>
         <Toolbar> 
             <Grid container justify="space-around" alignItems="center">
               <Logo />
               
               <Grid item>
                <Grid container justify="center" spacing={2}>
                  <button className={classes.menuLink} onClick={() => setMenuOpened(!menuOpened)}>Продукция</button>
                  <button className={classes.menuLink} onClick={() => setMenuOpened(!menuOpened)}>Аксессуары</button>
                  <button className={classes.menuLink} onClick={() => setMenuOpened(!menuOpened)}>Новости</button>
                  <button className={classes.menuLink} onClick={() => setMenuOpened(!menuOpened)}>Сервис</button>
                  <button className={classes.menuLink} onClick={() => setMenuOpened(!menuOpened)}>Контакты</button>
                </Grid>
               </Grid>
               <Social/>
             </Grid>
             <div
        className={menuOpened ? "levelMenu levelMenuOpened" : "levelMenu"}
      >
        <nav className={classes.levelMenuLevel}>
          {Object.keys(menuTree).map((cat, key) => (
            <li 
              className={classes.navLink}
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
          <nav className={classes.levelMenuLevel}>
            {Object.keys(menuTree[levelsSatate.cat]).map((subCat, key) => (
              <li
                className={classes.navLink}
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
          <nav className={classes.levelMenuLevel}>
            {Object.keys(menuTree[levelsSatate.cat][levelsSatate.subCat]).map(
              (item, key) => (
                <li className={classes.navLink}>
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




