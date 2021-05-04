import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "8px 15px",
        marginTop:theme.spacing(2),
        border: theme.palette.outlinedBtnDark.main,
        textTransform:"capitalize",
        background: 'none',
        color: theme.palette.secondary.main,
        '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
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