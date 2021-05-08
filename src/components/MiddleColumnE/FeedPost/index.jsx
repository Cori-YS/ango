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


const FeedPost= () => {

  return (
    <>
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="img/large.png" alt="" />
          <Column>
            <h3>Nome Empresa</h3>
            <h4>Area</h4>
            <h4>Nome da vaga</h4>
            <time>1 sem</time>
            <Link to='/detalhes-vaga/:id' >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Illum quaerat aut veniam molestiae atque dolorum omnis
              temporibus consequuntur saepe. Nemo atque consectetur saepe
              corporis odit in dicta reprehenderit, officiis, praesentium?
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
          
          
        <Link to="/editar-vaga/:id">
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
