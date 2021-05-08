import React from "react";
import { Link } from "react-router-dom";

import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader = () => {
  return (
    <Container style={{marginBottom:"10px"}}>
      <Link to="/perfil/:id">
      <ProfileCircle src="img/raul.jpg" alt="" />
      </Link>
      <Link to="/procurar">
      <SearchInput placeholder="Pesquisar" />
      </Link>
      
      
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
