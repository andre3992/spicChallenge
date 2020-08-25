import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "../modal/modal";

export default function GuestsList(props) {
  const [open, setOpen] = React.useState(false);
  const [guest, setGuest] = useState();

  //open modal
  const handleOpen = (guest) => {
    console.log(guest);
    setGuest(guest);
    setOpen(true);
  };

  //close modal
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [props.guests]);

  return (
    <div className="guestsList" key="1231">
      <div className="guestsTop">
        <div className="guestsListTop"></div>
        <div className="guestsListText">Guest List</div>
      </div>
      {props.guests.map((guest) => (
        <div
          className="guestList"
          key={guest}
          onClick={() => handleOpen(guest)}
        >
          <div class="grid-container">
            <div className="info">Name:</div>
            <div className="info">Email:</div>
            <div className="info">Town:</div>
            <div className="info">Phone:</div>
            <div className="infoDatabase">{guest.name}</div>
            <div className="infoDatabase">{guest.email}</div>
            <div className="infoDatabase">{guest.town}</div>
            <div className="infoDatabase">{guest.phone}</div>
          </div>
        </div>
      ))}
      <Modal
        guest={guest}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      />
    </div>
  );
}
