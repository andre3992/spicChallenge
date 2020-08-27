import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import Button from "react-bootstrap/Button";
import Form from "../Form/form";

export default function GuestsList(props) {
  const [open, setOpen] = React.useState(false);
  const [guest, setGuest] = useState();
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const showModal = (x) => {
    setShow(true);
    setGuest(x);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showFormModal = () => {
    setShowForm(true);
  };
  const hideShowForm = () => {
    setShowForm(false);
  };
  return (
    <div className="guestsList" key="1231">
      <div className="guestsTop">
        <div className="guestsListTop">
          <div className="closeGuestList">X</div>
          <div className="closeGuestListText">Fechar</div>
        </div>
        <div className="guestsListText">Guest List</div>
      </div>
      {props.guests.map((guest) => (
        <div className="guestList" key={guest} onClick={() => showModal(guest)}>
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
      {show ? <Modal handleClose={hideModal} guest={guest} show={show} /> : ""}
      {showForm ? <Form getDatas={props.getDatas}></Form> : ""}
      <Button onClick={showFormModal}>Add new user</Button>
    </div>
  );
}
