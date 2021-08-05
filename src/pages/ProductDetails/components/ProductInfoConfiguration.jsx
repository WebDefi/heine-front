import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Palette } from "@material-ui/icons";
import ConfigurationTabs from "./ConfigurationTabs";

const useStyles = makeStyles((theme) => ({}));

export default function ProductInfoConfiguration({ size = 12 }) {
  const classes = useStyles();
  return (
    <Grid item xs={size} style={{ marginTop: 20 }}>
      <Grid
        container
        style={{ border: "1px solid #C1C4C5", borderRadius: "10px" }}
        direction="row"
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                style={{
                  padding: "5px 10px",
                  borderRight: "2px solid #c1c4c5",
                }}
              >
                Конфигурації
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" style={{ padding: "5px 10px" }}>
                Номер Каталогу: K-010.28.388
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ borderTop: "2px solid #C1C4C5" }}>
          <ConfigurationTabs />
        </Grid>
      </Grid>
    </Grid>
  );
}
