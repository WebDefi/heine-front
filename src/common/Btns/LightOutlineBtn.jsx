import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "8px 15px",
        border: theme.palette.outlinedBtnLight.main,
        marginTop:theme.spacing(2),
        textTransform:"capitalize",
        background: 'none',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            background: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.main,
          }
      },

}));

export default function Header(props) {
    const classes = useStyles();
  
    return (
        <a href={props.link}>
            <Button outlined className={classes.btnControl}>
                {props.buttonText}
            </Button>
        </a>
    );
  }