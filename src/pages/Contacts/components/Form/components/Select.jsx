import React from 'react';
import { Grid, Typography, TextField, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
 

export default function Input({ 
    size = 6, 
    article
    })  {
        const [state, setState] = React.useState({
            age: '',
            name: 'hai',
          });
        
          const handleChange = (event) => {
            const name = event.target.name;
            setState({
              ...state,
              [name]: event.target.value,
            });
          };
   
    return (
        <Grid item xs={size}>
            <Typography variant="subtitle2">{article}</Typography>
            <FormControl variant="outlined"  size="small" fullWidth >

            <Select
              native
              fullWidth
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}>

              <option aria-label="sss" value="ыглф" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          </Grid>
    );
  };
         
       
       
       
       