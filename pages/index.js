import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MenuLateral from "../components/MenuLateral/menuLateral";
import TopBar from "../components/TopBar/topBar";
import fetch from "isomorphic-unfetch";

const Index = ({ data }) => {
  /*  const [results, setResults] = useState(data);

  async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/daily");
    const json = await res.json();
    return (
      <div>
        <p> ola </p>
        {{results.name}}
      </div>
    );
  }
};
*/
  const [results, setResults] = useState(data);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TopBar></TopBar>
        {results.name}
        <MenuLateral></MenuLateral>
      </Box>
    </Container>
  );
};
Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/guests");
  const json = await res.json();
  return { data: json };
};

export default Index;
