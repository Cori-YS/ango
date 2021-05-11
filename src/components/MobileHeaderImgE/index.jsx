import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth} from '../../auth'

import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader = () => {

  const { getUser} =useAuth()
  const [user, setUser] = useState({})
 
  useEffect(()=>{
   setUser(getUser())  
 },[])


  return (
    <Container style={{marginBottom:"10px"}}>
      <Link to="/principal-empresa">
        <h1 style={{color: '#fff', fontSize: '24px'}}>AngoSalo</h1>
      </Link>
      <Link to="/procurare">
      <SearchInput placeholder="Pesquisar" style={{background: '#fff'}}/>
      </Link>
      
      
      <Link to={`/perfil-empresa/${user.id}`}>
            <button  style={{background: '#299BE8', color: '#fff', border: 'none'}}>
              <span>Perfil</span>
            </button>
            </Link>
    </Container>
  );
};

export default MobileHeader;
