import React from 'react';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Instagram, Facebook, YouTube, Link } from '@material-ui/icons';
import SocialItem from './components/SocialItem'
import Local from '../Local/Local';

export default function Social()  {
  return (
    <Grid item>
       <Grid container alignItems="center" spacing={2}>
            <Grid item>
                <Grid container alignItems="center">
                  <SocialItem link="/">
                    <Instagram style={{ fontSize: 23 }} />
                  </SocialItem>
                  <SocialItem link="/">
                    <Facebook style={{ fontSize: 23, margin:"0 5px" }} />
                  </SocialItem>
                  <SocialItem link="/">
                    <YouTube style={{ fontSize: 30 }} />
                  </SocialItem>
                    {/* <a href="/"><Instagram style={{ fontSize: 23 }}/></a>
                    <a href="/"><Facebook style={{ fontSize: 23, margin:"0 5px" }}/></a>
                    <a href="/"><YouTube style={{ fontSize: 30 }}/></a> */}
                </Grid>
            </Grid>
                <Local/>
       </Grid>
    </Grid>
  );
};
