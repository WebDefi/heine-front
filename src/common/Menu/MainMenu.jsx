import React from 'react';
import { useState } from "react";
import './components/style.css'
import { Link } from "react-router-dom";

const MainMenu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [levelsSatate, setLevelsSatate] = useState({
    catOpened: false,
    cat: null,
    subCatOpened: false,
    subCat: null
  });

  const menuTree = {
    "1": {
      "11": {
        "111": "#",
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
    <header className="header" style={{marginTop:400}}>
      <button onClick={() => setMenuOpened(!menuOpened)}>Menu</button>
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
                  <Link
                    to={menuTree[levelsSatate.cat][levelsSatate.subCat][item]}
                    key={key}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </nav>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default MainMenu;
