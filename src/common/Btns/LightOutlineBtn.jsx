import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "8px 15px",
        border: '1px solid #fff',
        marginTop:theme.spacing(2),
        textTransform:"capitalize",
        background: 'none',
        color: "#fff",
        '&:hover': {
            background: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.main,
          }
      },

}));

export default function Header(props) {
    const classes = useStyles();
  
    return (
        <Button outlined className={classes.btnControl} component='a'>
            {props.buttonText}
        </Button>
    );
  }