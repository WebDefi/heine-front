import React from 'react';
import { Grid, Typography, Checkbox,FormGroup,FormControlLabel,Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrangeBtn from '../../../../common/Btns/OrangeBtn'

export default function Form({ 
  size = 6, 
  children,
  title,
  })  {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
   
 
  return (
    <Grid item xs={size}>
      <Container>
      <Typography variant="body1">{title}</Typography>
        <Grid container justify="column">
            
            <FormGroup column>
             
            <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Secondary"/>
                <FormControlLabel
                    control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                    label="Secondary"/>
            </FormGroup>
            
            </Grid>
         
        <Typography variant="body1">{title}</Typography>
        <Grid container>
            <Grid item>
            <FormGroup column>
            <FormControlLabel
                control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                label="Да, я хочу подписаться на рассылку новостей! Предоставленная мной информация будет храниться в соответствии с нашими"/>
            </FormGroup>
            <OrangeBtn buttonText="asdasdasd" />
            </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
