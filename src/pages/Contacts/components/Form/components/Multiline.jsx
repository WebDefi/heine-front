import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
 

export default function Multiline({ 
    size = 6, 
    article
    })  {
        const [value, setValue] = React.useState();
        const handleChange = (event) => {
            setValue(event.target.value);
          };
   
    return (
        <Grid item xs={size}>
            <Typography variant="subtitle2">{article}</Typography>
            <FormControl variant="outlined"  size="small" fullWidth >
            <TextField
            size="medium"
            id="outlined-multiline-static"
            placeholder="type.."
            multiline
            variant="outlined"
            rowsMax={6}
            value={value}
            onChange={handleChange}/>
          </FormControl>
          </Grid>
    );
  };
         
       
       
       
       