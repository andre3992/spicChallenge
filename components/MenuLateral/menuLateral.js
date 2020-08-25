import React, { useState, useEffect } from "react";
import Link from "../../src/Link";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DraftsIcon from "@material-ui/icons/Drafts";
import UpdateIcon from "@material-ui/icons/Update";
import GuestsList from "../GuestsList/guestsList";

export default function MenuLateral(props) {
  return (
    <div className="menuLateral">
      {props.openGuests ? <GuestsList guests={props.guests} /> : ""}
      <div className="links">
        <Link href="./dashboard" style={{ textDecoration: "none" }}>
          <div className="icons">
            <div>
              <DashboardIcon />
            </div>
            <div className="iconNames">
              <span style={{ marginLeft: "15px" }}> Dashboard </span>
            </div>
          </div>
        </Link>

        <div onClick={props.openGuestsWindows}>
          <div className="icons">
            <div>
              <ListAltIcon />
            </div>
            <div className="iconNames">
              <span style={{ marginLeft: "15px" }}>
                Guest <br />
                List
              </span>
            </div>
          </div>
        </div>
        <Link href="./campainsInProgress" style={{ textDecoration: "none" }}>
          <div className="icons">
            <DraftsIcon />
            <div className="iconNames">
              <span style={{ marginLeft: "15px" }}>
                Campains <br /> in progress
              </span>
            </div>
          </div>
        </Link>

        <div className="inProgress">
          <p style={{ color: "black", fontWeight: "bold " }}>In progress</p>
          <p>
            <UpdateIcon />
            <span style={{ marginLeft: "15px" }}>
              NEWSLETTER <br />
              LONDON 1
            </span>
          </p>
          <p>
            <UpdateIcon />
            <span style={{ marginLeft: "15px" }}>SMS LONDON 1</span>
          </p>
        </div>
      </div>
    </div>
  );
}
