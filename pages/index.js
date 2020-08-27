import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MenuLateral from "../components/MenuLateral/menuLateral";
import TopBar from "../components/TopBar/topBar";
import fetch from "isomorphic-unfetch";

const Index = ({ data }) => {
  const [results, setResults] = useState(data);
  const [addedGuest, setAddedGuest] = useState("");
  const [openGuests, setOpenGuests] = useState(false);
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    country: "",
    town: "",
    address: "",
    company: "",
  });
  function getDatas(newData) {
    setDatas(newData);
    addNewGuest(newData);
  }
  const addNewGuest = async (newData) => {
    const res = await fetch("https://spicchallenge.herokuapp.com/api/guests", {
      method: "post",
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((guestAdded) => {
        setAddedGuest(guestAdded.message);
        alert(guestAdded.message);
      });
  };

  function openGuestsWindows() {
    if (openGuests) {
      setOpenGuests(false);
      return;
    } else {
      setOpenGuests(true);
      return;
    }
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TopBar></TopBar>
        <MenuLateral
          getDatas={getDatas}
          openGuestsWindows={openGuestsWindows}
          openGuests={openGuests}
          guests={results}
        ></MenuLateral>
      </Box>
    </Container>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://spicchallenge.herokuapp.com/api/guests");
  const json = await res.json();
  return { data: json };
};

export default Index;
