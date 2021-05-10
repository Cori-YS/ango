import React, {useState, useEffect} from 'react';

import Panel from '../../Panel';

import { Link } from "react-router-dom";

import { Container } from './styles';
import { useAuth} from '../../../auth'
const ProfilePanel= () => {
const [user, setUser]=useState({})
  const { getUser }= useAuth()

  useEffect(()=>{
  setUser(getUser())
  },[])
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
         src="img/raul.jpg" alt=""  
          className="profile-picture"
        />
        <h1><Link to={`/perfil-empresa/${user.id}`}>{user.nome}</Link></h1>
        <h2>{user.email}</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Bem vindo {user.nome}</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
