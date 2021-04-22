import React from 'react';
import { Typography,Grid,Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import newsImg from '../../../assets/images/newsImg.jpg'
import newImgBg from '../../../assets/images/newsImgBg.svg'
const useStyles = makeStyles(theme => ({
    newsItemImg: {
        padding:"16px 14px",
        position:"absolute",
         
    },
    ImgBg: {
         position: "relative"
    },
    newsCaption: {
        background: "#F2D1C2",
        padding: "2px 10px",
        borderRadius: 60,
    },
}));

export default function NewsItem({ 
  image,title,subtitle,article,link
  })  {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ borderBottom:"1px solid #C1C4C5" }}>
       <Grid container justify="flex-start" alignItems="flex-start" spacing={4} >
        <Grid item xs>
            <div>
                <a href="/"><img src={newsImg} className={classes.newsItemImg}></img></a>
                <img src={newImgBg} className={classes.newsItemBg}></img>
            </div>
        </Grid>
            <Grid item xs={9}>
                <div className={classes.gridContent}>
                    <Typography className={classes.newsCaption} style={{color:"#262626"}} variant="caption">{article}</Typography>
                    <a href="/"><Typography variant="h5">{title}</Typography></a>
                    <Typography variant="body2" style={{padding:"15px 0 30px 0"}}>{subtitle}</Typography>
                    <Link to={link} href={link} component="a">Узнать больше</Link>
                </div>
            </Grid>
       </Grid>
    </Grid>
  );
};
