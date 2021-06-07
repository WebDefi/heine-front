import React from 'react';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import './style.css'

export default function Phone(props) {
    return (
       
        <div class="call-widget">
            <i class="fa fa-phone">
              <PhoneEnabledIcon />
            </i>
            <strong><a href="tel:380991111111">+38(099) 111 11 11</a></strong>
        </div>
    );
  }