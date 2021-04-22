import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    btnControl: {
        padding: "8px 15px",
        marginTop:theme.spacing(2),
        border: '1px solid #444444',
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
        <Button outlined className={classes.btnControl} component='a'>
            {props.buttonText}
        </Button>
    );
  }