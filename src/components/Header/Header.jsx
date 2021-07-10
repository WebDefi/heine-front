import React, { useState, useEffect } from "react";
import Logo from "./components/Logo/Logo";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Social from "./components/Social/Social";
import './Header.css'

// const useStyles = makeStyles((theme) => ({
//   header: {
//     background: theme.palette.local.main,
//     borderBottom: theme.palette.headerBottom.main,
//     height: "7.5em",
//     "&button": {
//       margin: "1em",
//     },
//     [theme.breakpoints.down("sm")]: {
//       height: "5.8em",
//     },
//   },
//   levelMenu: {
//     position: "absolute",
//     display: "flex",
//     flexFlow: "row wrap",
//     width: "100vw",
//     backgroundColor: theme.palette.local.main,
//     top: "7.5em",
//     height: 0,
//     left: 0,
//     overflow: "hidden",
//     transition: "0.4s height",
//   },
//   levelMenuOpened: {
//     //FIX //////////////////////////////////////////////////////////////////////////////////////
//     // display: "none",
//     //FIX //////////////////////////////////////////////////////////////////////////////////////
//     height: "8em",
//   },
//   levelMenuLevel: {
//     padding: "0.8em",
//     borderLeft: theme.palette.headerBorder.main,
//     "& li": {
//       cursor: "pointer",
//     },
//   },
//   navLink: {
//     color: theme.palette.lightGray.main,
//     "&:hover": {
//       transition: "all 0.5s ease",
//       borderRadius: 7,
//       background: theme.palette.footerLinkHover.main,
//       color: "#fff",
//     },
//   },
//   menuLink: {
//     border: "none",
//     background: "none",
//     color: "#fff",
//     "&:hover": {
//       color: theme.palette.primary.main,
//       transition: "all 0.3s ease",
//     },
//     [theme.breakpoints.down("sm")]: {
//       display: "none",
//     },
//   },
// }));

export default function Header() {
  // const classes = useStyles();
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuTree, setMenuTree] = useState({});
  const [levelsSatate, setLevelsSatate] = useState({
    catOpened: false,
    cat: null,
    subCatOpened: false,
    subCat: null,
  });

  const prodMenuTree = {
    1: {
      11: {
        111: "#",
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

  const accMenuTree = {
    a1: {
      a11: {
        a111: "#",
        a112: "#",
      },
      a12: {
        a121: "#",
        a122: "#",
        a123: "#",
      },
      a13: {
        a131: "#",
        a132: "#",
      },
    },
    a2: {
      a21: {
        a211: "#",
        a212: "#",
        a213: "#",
      },
      a22: {
        a221: "#",
        a222: "#",
        a223: "#",
      },
    },
  };

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('http://116.202.243.73:3000/products/menu');
  //     const jsonResponse = await res.json();
  //     setData(jsonResponse);
  //   };

  //   getData();
  // }, [setData]);

  return (
    <div>
      <AppBar color="secondary" position="fixed" className='header'>
        <Toolbar>
          <Grid container justify="space-around" alignItems="center">
            <Logo />

            <Grid item xs={12} sm={6}>
              <Grid container justify="center" spacing={2}>
                <button
                  className='menuLink'
                  onClick={() => {
                    setMenuOpened(
                      menuOpened &&
                        JSON.stringify(menuTree) ===
                          JSON.stringify(prodMenuTree).toString()
                        ? !menuOpened
                        : true
                    );
                    setMenuTree(prodMenuTree);
                    setLevelsSatate({
                      catOpened: false,
                      cat: null,
                      subCatOpened: false,
                      subCat: null,
                    });
                  }}
                >
                  Menu
                </button>
                <button
                  className='menuLink'
                  onClick={() => {
                    setMenuOpened(
                      menuOpened &&
                        JSON.stringify(menuTree) === JSON.stringify(accMenuTree)
                        ? !menuOpened
                        : true
                    );
                    setMenuTree(accMenuTree);
                    setLevelsSatate({
                      catOpened: false,
                      cat: null,
                      subCatOpened: false,
                      subCat: null,
                    });
                  }}
                >
                  Accessories
                </button>
              </Grid>
            </Grid>
            <Social />
          </Grid>
          <div
            className={
              menuOpened ? "level-menu level-menu_opened" : "level-menu"
            }
          >
            <nav className="level-menu_level">
              {Object.keys(menuTree).map((cat, key) => (
                <li
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
            {levelsSatate.catOpened ? (
              <nav className="level-menu_level">
                {Object.keys(menuTree[levelsSatate.cat]).map((subCat, key) => (
                  <li
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
                ))}
              </nav>
            ) : (
              ""
            )}
            {levelsSatate.subCatOpened ? (
              <nav className="level-menu_level">
                {Object.keys(
                  menuTree[levelsSatate.cat][levelsSatate.subCat]
                ).map((item, key) => (
                  <li>
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
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* <MainMenu /> */}
    </div>
  );
}
