import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuLateral from "../components/MenuLateral/menuLateral"
import TopBar from"../components/TopBar/topBar"


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TopBar></TopBar>
       <MenuLateral></MenuLateral>
      </Box>
    </Container>
  );
}
