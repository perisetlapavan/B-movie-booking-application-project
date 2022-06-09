import React from 'react';
import { ReactComponent as YourSvg } from '../../logo.svg';
import './Header.css';
import Button from '@mui/material/Button';
import LogRegModal from './insideHeader/LogRegModal';
import { Link } from 'react-router-dom';

function Header(props) {

  if (props.extra === "false") {
    return <div className="head" style={{display:"flex", justifyContent: "space-between"}}>
      <div><YourSvg /></div>
      <div><LogRegModal></LogRegModal></div>
    </div>;
  }
  else {
    return <div className="head" style={{ display: "flex", justifyContent: "space-between" }}>
      <div><YourSvg /></div>
      <div style={{display:"flex"}}>
        <Button variant="contained" style={{ width: "10%" }} ><Link to="/BookShow" style={{textDecoration: "none" , color:'white'}}><h5>Book Show</h5></Link></Button><span>&nbsp;&nbsp;</span>
        <LogRegModal></LogRegModal>
      </div>
    </div>;
  }

}

export default Header;