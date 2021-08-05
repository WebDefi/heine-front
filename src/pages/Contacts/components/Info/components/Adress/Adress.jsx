import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  adressContent: {
    textAlign:'center'
  },
}));

export default function Adress({ size = 6, children, img, title, article }) {
  const classes = useStyles();
  return (
    <Grid item xs={size} style={{ paddingTop: 50 }}>
      <Grid container justify="center">
        <Grid item>
          <div style={{display:"flex"}}>
            <img src={img} alt="" style={{ margin: "0 auto" }} />
          </div>
          <div className={classes.adressContent}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography>{article}</Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

{
  /* <ul>
              <li><strong>Адрес:</strong> 03035, г. Киев, ул. Льва Толстого, 63</li>
              <li style={{paddingTop:5}}><strong>Email:</strong> office@medigran.com</li>
              <li style={{paddingTop:5}}><strong>Тел.:</strong> +38 (067) 824-85-04</li>
              <li style={{paddingTop:5}}><strong>Fax:</strong> +38 (097) 064-73-52</li>
            </ul> */
}
