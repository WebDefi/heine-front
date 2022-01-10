import React, { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./components/Social/Social";
// import './Header.css'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/arrow.png'
import MenuCat from "./components/MenuCat";

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.local.main,
    borderBottom: theme.palette.headerBottom.main,
    height: "7.5em",
    "&button": {
      margin: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "5.8em",
    },
  },
  levelMenu: {
    position: "absolute",
    display: "flex",
    flexFlow: "row wrap",
    width: "100vw",
    backgroundColor: theme.palette.local.main,
    top: "7.4em",
    height: 0,
    left: 0,
    overflow: "hidden",
    transition: "0.4s height",
    
    
  },
  levelMenuOpened: {
    position: "absolute",
    display: "flex",
    flexFlow: "row wrap",
    padding: "0.8em",
    width: "100vw",
    backgroundColor: theme.palette.local.main,
    top: "7.4em",
 
    left: 0,
    overflow: "hidden",
    transition: "0.4s height",
    height: "20em",
   
  },
  levelMenuLevel: {
    
    width:"33.3%",
    padding: "0.8em",
    borderLeft: theme.palette.headerBorder.main,
    "& li": {
      
      color: theme.palette.lightGray.main,
      cursor: "pointer",
      paddingTop:5,
      paddingBottom:5,
      paddingRight:20,
      paddingLeft:10,
      "&:hover": {
        transition: "all 0.5s ease",
        borderRadius: 7,
        background: theme.palette.footerLinkHover.main,
        color: theme.palette.white.main,
        backgroundImage: `url(${arrow})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: "right",
      },
    },
  },
  navLink: {
    cursor:"pointer",
    color: theme.palette.lightGray.main,
    "&:hover": {
      transition: "all 0.5s ease",
      borderRadius: 7,
      background: theme.palette.footerLinkHover.main,
      color: "#fff",
    },
  },

  navigationLink: {
    padding:"0 8px",
    color:theme.palette.white.main,
    textTransform:"uppercase",
    "&:hover": {
      color:theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  menuLink: {
    textTransform:"uppercase",
    fontSize:16,
    fontFamily:"Montserrat",
    cursor:"pointer",
    border: "none",
    background: "none",
    color: theme.palette.white.main,
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "all 0.3s ease",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuTree, setMenuTree] = useState({});
  const [levelsState, setlevelsState] = useState({
    catOpened: false,    
    cat: null,
    subCatOpened: false,
    subCat: null,
  });  
  

  const [prodMenuTree, setProdMenuTree] = useState([]);
  const [accMenuTree, setAccMenuTree] = useState([]);
  useEffect(() => {
    const getData = async (type) => {
      const res = await fetch(`http://116.202.243.73:3000/${type}/menu`);
      const jsonResponse = await res.json();      
      if(!res.status === 200) {
        console.log('Error while fetching data');
      } else {
        if(type === 'products') setProdMenuTree(jsonResponse);  
        if(type === 'accessories') setAccMenuTree(jsonResponse);
      }            
    };

    getData('products');
    getData('accessories');
  }, []);
  

  return (
    <div>
      <AppBar color="secondary" position="fixed" className={classes.header}>
        <Toolbar>
          <Grid container justify="space-around" alignItems="center">
            <Logo />

            <Grid item xs={12} sm={6}>
              <Grid container justify="center" alignItems="center">
                <button
                  className={classes.menuLink}
                  onClick={() => {
                    setMenuOpened(
                      menuOpened &&
                        JSON.stringify(menuTree) ===
                          JSON.stringify(prodMenuTree).toString()
                        ? !menuOpened
                        : true
                    );
                    setMenuTree(prodMenuTree);
                    setlevelsState({
                      catOpened: false,
                      cat: null,
                      subCatOpened: false,
                      subCat: null,
                    });
                  }}
                >
                  Продукция
                </button>
                <button
                  className={classes.menuLink}
                  onClick={() => {
                    setMenuOpened(
                      menuOpened &&
                        JSON.stringify(menuTree) === JSON.stringify(accMenuTree)
                        ? !menuOpened
                        : true
                    );
                    setMenuTree(accMenuTree);
                    setlevelsState({
                      catOpened: false,
                      cat: null,
                      subCatOpened: false,
                      subCat: null,
                    });
                  }}
                >
                  Аксессуары
                </button>
                <Link to="/news" className={classes.navigationLink}>Новости</Link>
                <Link to="/service" className={classes.navigationLink}>Сервисы</Link>
                <Link to="/contacts" className={classes.navigationLink}>Контакты</Link>
              </Grid>
            </Grid>
            <Social />
          </Grid>
          <div
             className={ menuOpened ? classes.levelMenuOpened : classes.levelMenu}
          >
            <nav className={classes.levelMenuLevel}>
              <MenuCat fstCat={JSON.stringify(menuTree) === JSON.stringify(prodMenuTree) ? 'Продукция' : 'Аксессуры'} />
              {Object.keys(menuTree).map((cat, key) => (
                <li
                  onClick={() =>
                    setlevelsState({
                      catOpened: true,
                      cat,
                      subCatOpened: false,
                      subCat: null,
                    })
                  } 
                  key={key}
                >
                  {cat}
                </li>
              ))}
            </nav>
            {levelsState.catOpened ? (
              <nav className={classes.levelMenuLevel}>
                <MenuCat fstCat={levelsState.cat} />
                {Object.keys(menuTree[levelsState.cat]).map((subCat, key) => (
                  <li
                    onClick={() =>
                      setlevelsState({
                        ...levelsState,
                        subCatOpened: true,
                        subCat,
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
            {levelsState.subCatOpened ? (
              <nav className={classes.levelMenuLevel}>
                <MenuCat fstCat={levelsState.subCat} />
                {Object.keys(
                  menuTree[levelsState.cat][levelsState.subCat]
                ).map((item, key) => (
                  <li>
                    <Link
                      style={{color:"#fff"}}
                      to={`/productDetail/${menuTree[levelsState.cat][levelsState.subCat][item]}`}
                      key={key}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
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
