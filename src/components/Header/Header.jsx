import React, { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./components/Social/Social";

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
    top: "7.5em",
    height: 0,
    left: 0,
    overflow: "hidden",
    transition: "0.4s height",
  },
  levelMenuOpened: {
    //FIX //////////////////////////////////////////////////////////////////////////////////////
    display: "none",
    //FIX //////////////////////////////////////////////////////////////////////////////////////
    height: "8em",
  },
  levelMenuLevel: {
    padding: "0.8em",
    borderLeft: theme.palette.headerBorder.main,
    "& li": {
      cursor: "pointer",
    },
  },
  navLink: {
    color: theme.palette.lightGray.main,
    "&:hover": {
      transition: "all 0.5s ease",
      borderRadius: 7,
      background: theme.palette.footerLinkHover.main,
      color: "#fff",
    },
  },
  menuLink: {
    border: "none",
    background: "none",
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "all 0.3s ease",
    },
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [menuOpened, setMenuOpened] = useState(false);
  const [levelsSatate, setLevelsSatate] = useState({
    catOpened: false,
    cat: null,
    subCatOpened: false,
    subCat: null,
  });

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('http://116.202.243.73:3000/products/menu');
  //     const jsonResponse = await res.json();
  //     setData(jsonResponse);
  //   };

  //   getData();
  // }, [setData]);

  const menuTree = {
    "Дерматоскопы и Док": {
      Дерматоскопы: {
        Модель: "/productCats",
        112: "#",
      },
      12: {
        121: "#",
        122: "#",
        123: "#",
      },
      13: {
        131: "#",
        132: "#",
      },
    },
    2: {
      21: {
        211: "#",
        212: "#",
        213: "#",
      },
      22: {
        221: "#",
        222: "#",
        223: "#",
      },
    },
  };
  return (
    <div>
      <AppBar color="secondary" position="fixed" className={classes.header}>
        <Toolbar>
          <Grid container justify="space-around" alignItems="center">
            <Logo />

            <Grid item xs={12} sm={6}>
              <Grid container justify="center" spacing={2}>
                <button
                  className={classes.menuLink}
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  Продукция
                </button>
                <button
                  className={classes.menuLink}
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  Аксессуары
                </button>
                <button
                  className={classes.menuLink}
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  Новости
                </button>
                <button
                  className={classes.menuLink}
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  Сервис
                </button>
                <button
                  className={classes.menuLink}
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  Контакты
                </button>
              </Grid>
            </Grid>
            <Social />
          </Grid>
          <div
            className={`$menuOpened ? ${classes.levelMenu} ${classes.levelMenuOpened} : ${classes.levelMenu}`}
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
                      subCat: null,
                    })
                  }
                  key={key}
                >
                  {cat}
                </li>
              ))}
            </nav>
            {`${
              levelsSatate.catOpened ? (
                <nav className={classes.levelMenuLevel}>
                  {Object.keys(menuTree[levelsSatate.cat]).map(
                    (subCat, key) => (
                      <li
                        className={classes.navLink}
                        onClick={() =>
                          setLevelsSatate({
                            ...levelsSatate,
                            subCatOpened: true,
                            subCat,
                          })
                        }
                        key={key}
                      >
                        {subCat}
                      </li>
                    )
                  )}
                </nav>
              ) : (
                ""
              )
            }`}

            {`${
              levelsSatate.subCatOpened ? (
                <nav className={classes.levelMenuLevel}>
                  {Object.keys(
                    menuTree[levelsSatate.cat][levelsSatate.subCat]
                  ).map((item, key) => (
                    <li className={classes.navLink}>
                      <a
                        href={
                          menuTree[levelsSatate.cat][levelsSatate.subCat][item]
                        }
                        key={key}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </nav>
              ) : (
                ""
              )
            }`}
          </div>
        </Toolbar>
      </AppBar>

      {/* <MainMenu /> */}
    </div>
  );
}
