import React from 'react';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import './style.css'
import { Link } from "react-router-dom";

export default function Phone(props) {
    return (
       
        <div class="call-widget">
            <i class="fa fa-phone">
              <PhoneEnabledIcon />
            </i>
            <strong><Link to="tel:380991111111">+38(099) 111 11 11</Link></strong>
        </div>
    );
  }