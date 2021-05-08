import React, {useState} from 'react';

import Panel from '../../Panel';

import { Modal} from 'antd';

import { Link } from 'react-router-dom'

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  SendIcon,
} from './styles';


const FeedPost= ({Id, data, nomeVaga, nomeEmpresa,overView, setor, idEmpresa}) => {
  const [Active, setActive] =useState('false')
  function countdown(){
    setActive(!Active)
    let secondsToGo = 5;
    let title =Active ? 'A sua candidatura sera enviada': 'A remover candidatura em breve'
  const modal = Modal.success({
    title:title ,
    content: `Em ${secondsToGo} segundos.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Em ${secondsToGo} segundos.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
  }

  return (
    <>
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="img/large.png" alt="" />
          <Column>
            <Link to={`/perfil-empresa-ver/${idEmpresa}`} ><h3>{nomeEmpresa}</h3></Link>
            
            <h4>{setor}</h4>
            <Link to={`/detalhes/${Id}`} ><h4>{nomeVaga}</h4></Link>
            <time>{data}</time>
            <Link to={`/detalhes/${Id}`} >
              <p>
              {overView}
              </p>

            </Link>
          </Column>
        </Row>

        <PostImage
          src="img/larg.png" alt="" 
        />

       
        <Row>
          <Separator />
        </Row>

        <Row className="actions" style={{display:"flex", justifyContent:"flex-end"}} >
          
          
         
          <button style={{ borderRadius:"4px"}} onClick={countdown} >
            <SendIcon />
            {Active && ( <span>Candidatar-me</span>)}
            {!Active && ( <span>Remover Candidatura</span>)}
           
          </button>
        </Row>
       
      </Container>
      
    </Panel>
    
    </>
  );
};

export default FeedPost;
