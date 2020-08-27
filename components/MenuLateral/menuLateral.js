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
      {props.openGuests ? (
        <GuestsList
          openGuestsWindows={props.openGuestsWindows}
          getDatas={props.getDatas}
          guests={props.guests}
        />
      ) : (
        ""
      )}
      <div className="links">
        <Link href="./dashboard" style={{ textDecoration: "none" }}>
          <div className="icons">
            <div className="iconsSvg">
              <DashboardIcon />
            </div>
            <div className="iconNames">Dashboard</div>
          </div>
        </Link>
        <div onClick={props.openGuestsWindows}>
          <div className="icons">
            <div className="iconsSvg">
              <ListAltIcon />
            </div>
            <div className="iconNames">
              Guest <br />
              List
            </div>
          </div>
        </div>
        <Link href="./campainsInProgress" style={{ textDecoration: "none" }}>
          <div className="icons">
            <div className="iconsSvg">
              <DraftsIcon />
            </div>
            <div className="iconNames">
              Campains <br /> in progress
            </div>
          </div>
        </Link>

        <div className="inProgress">
          <p style={{ color: "black", fontWeight: "bold " }}>In progress</p>
          <div className="icons">
            <div className="iconsSvg">
              <UpdateIcon />
            </div>
            <div className="iconNames">
              NEWSLETTER <br />
              LONDON 1
            </div>
          </div>
          <div className="icons">
            <UpdateIcon />
            <div className="iconNames">SMS LONDON 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
