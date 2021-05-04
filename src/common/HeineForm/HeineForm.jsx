import React from 'react';
import { Grid, Button, Typography, Paper,Container, TextField,InputLabel,Select,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../HeineForm/form/Form'
import Content from '../HeineForm/content/Content'
import heineDistr from '../../assets/images/heineDistr.png'
import HEINE from '../../assets/images/heinedistr.svg'
import OrangeBtn from '../../common/Btns/OrangeBtn'
import LightOutlineBtn from '../../common/Btns/LightOutlineBtn'
import DarkOutlineBtn from '../../common/Btns/DarkOutlineBtn'

const useStyles = makeStyles(theme => ({
  heineForm: {
    // display:"flex",
    // justifyContent:"start",
    // alignItems: "center",
    height: 500,
    backgroundColor: theme.palette.primary.main,
    },
    input: {
      padding: 15,
    },
    findDistr: {
      display:"flex",
        justifyContent:"start",
        alignItems: "center",
        height: 500,
        backgroundColor: theme.palette.primary.main,
    },
    contentText: {
      color:theme.palette.primary.contrastText,
      paddingTop:13,
      lineHeight: 1.8,
    }
    
  

}));

export default function HeineForm()  {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
  setAge(event.target.value);}
  const classes = useStyles();
  
  return (
        <Grid item xs={12}>
        
          <Paper className={classes.heineForm}>
            
            <Container className={classes.findDistr}>
            <Grid container justify="space-between" >
            
              <Form size={5} 
                
                title="Найти дистибьютора"
                subtitle1="Вы заинтересованы в одном из наших продуктов?"
                subtitle2="Найдите ближайшего к вам дистрибьютора быстро и легко.">
                <form>
                  <TextField  
                  style={{paddingTop:20}}
                  placeholder='Введите свою страну'
                  color="primary" 
                  size="small"
                  variant="outlined"
                  fullWidth
                  // inputProps={{
                  //     className: classes.input
                  // }}
                  // className={classes.formControl}
                   />
                  
              
                <FormControl variant="outlined" size="small" className={classes.formControl} fullWidth style={{paddingTop:10}}>
                <Select
                
                    native
                    value={age}
                    onChange={handleChange}>
                    <option value="asdasd"   />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
                 
                </FormControl>
                
                </form>   
                <OrangeBtn buttonText="Поиск" width="100%" padding="10px"/>
                
                     
                  </Form>
                <Content size={6} 
                  image={HEINE}>
                  <Typography variant="body2" component="p" className={classes.contentText}>
                    HEINE Optotechnik является мировым лидером в производстве инструментов для первичной диагностики с более чем 500 сотрудниками. На протяжении более 70 лет компания HEINE Optotechnik находится в 100% семейном владении и управлении. Мы продолжаем разрабатывать и производить инструменты HEINE на наших предприятиях в Германии, где мы сочетаем многолетний опыт и мастерство с самыми современными производственными технологиями.
                  </Typography>
                  
                </Content>
                
            </Grid>
            
          </Container>
              <Grid container justify="flex-end" style={{position:"absolute"}}>
                    <Grid item style={{position:"relative", bottom:155, right:0}}>
                      <a href="#"><img style={{ width:"105vh" }}  src={heineDistr}></img></a>
                    </Grid>
                  </Grid>
        </Paper>
        </Grid>
  );
};
