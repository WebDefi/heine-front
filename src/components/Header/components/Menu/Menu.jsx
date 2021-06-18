import React from "react";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Products from "../../../../pages/Products/Products";
import MainMenu from "../../../../common/Menu/MainMenu";

import MenuLink from "./components/MenuLink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMe: true,
    };
  }
  operation() {
    this.setState({
      showMe: !this.state.showMe,
    });
  }
  render() {
    return (
      <Grid item>
        <Grid container justify="center" spacing={2}>
          <Router>
            <Link onClick={() => this.operation()} to="/products">
              Products
            </Link>
            <Link to="/news">News</Link>
          </Router>
        </Grid>
      </Grid>
    );
  }
}

export default Menu;
