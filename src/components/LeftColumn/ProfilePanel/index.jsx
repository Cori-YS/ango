import React from 'react';

import Panel from '../../Panel';

import { Link } from "react-router-dom";

import { Container } from './styles';

const ProfilePanel= () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
         src="img/raul.jpg" alt=""  
          className="profile-picture"
        />
        <h1><Link to="/perfil/:id">Raul Inacio</Link></h1>
        <h2>Ndongo @ membro</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Bem vindo</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
