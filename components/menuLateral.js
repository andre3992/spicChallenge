import React from 'react';
import Link from '../src/Link';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DraftsIcon from '@material-ui/icons/Drafts';
import UpdateIcon from '@material-ui/icons/Update';

export default function MenuLateral() {
  return (
    <div className="menuLateral">
      <div className="links">
      <p>        
        <Link href="./dashboard" style={{textDecoration: "none"}}>
        <div className="icons">
        <div> <DashboardIcon ></DashboardIcon></div> <div className="iconNames"> <span style={{marginLeft: "15px"}}> Dashboard </span> </div>
        </div>
        </Link>

      </p>
      <p>
        <Link href="./about" style={{textDecoration: "none"}}>
        <div className="icons">
        <div> <ListAltIcon></ListAltIcon> </div> 
        <div className="iconNames">  <span style={{marginLeft: "15px"}}>
        Guest <br />List </span></div> 
        </div>

        </Link>
      </p>
      <p>
        <Link href="./campainsInProgress" style={{textDecoration: "none"}}>
        <div className="icons">
        <DraftsIcon></DraftsIcon> <div className="iconNames"><span style={{marginLeft: "15px"}}> Campains <br /> in progress </span></div>
        </div>
        </Link>
      </p>
      </div>
      <div className="inProgress">
      <p style={{color:"black"}}>In progress</p>
      <p><UpdateIcon></UpdateIcon> <span style={{marginLeft: "15px"}}>NEWSLETTER LONDON 1</span></p>
      <p><UpdateIcon></UpdateIcon> <span style={{marginLeft: "15px"}}>SMS LONDON 1</span></p>
      </div>
    </div>
  );
}