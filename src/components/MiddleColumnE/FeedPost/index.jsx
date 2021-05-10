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
  EliminarIcon
} from './styles';


const FeedPost= ({Id, data, nomeVaga, nomeEmpresa,overView, setor, idEmpresa}) => {

  return (
    <>
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="img/large.png" alt="" />
          <Column>
            <Link to={`/perfil-empresa/${idEmpresa}`} ><h3>{nomeEmpresa}</h3></Link>
            <h4>{setor}</h4>
            <Link to={`/detalhes-vaga/${Id}`} ><h4>{nomeVaga}</h4></Link>
            <time>{data}</time>
            <Link to={`/detalhes-vaga/${Id}`} >
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
          
          
        <Link to={`/editar-vaga/${Id}`}>
          <button style={{ borderRadius:"4px"}}>
            <SendIcon />
            
            <span>
              Editar Vaga
            </span>
            
           
          </button>
          </Link>

          <button style={{ borderRadius:"4px"}}>
            <EliminarIcon />
            <span>
              Eliminar Vaga
            </span>
           
          </button>

        </Row>
       
      </Container>
      
    </Panel>
    
    </>
  );
};

export default FeedPost;
