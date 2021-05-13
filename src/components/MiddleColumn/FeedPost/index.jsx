import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom'
import Api from '../../../services/api'
import { useAuth} from '../../../auth'

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
  const { getUser} =useAuth()
  const [user, setUser] = useState({})
  const [Active, setActive] =useState(false)
  const [vagaId, setVagaId]= useState(false)

  const {id} = useParams()
  async function countdown(){
  

    if (Active) {
      await Api.post('/solicitar/del', {vaga:id,candidato:user.id })
      setActive(!Active)
    }else {
      await Api.post('/solicitar', {vaga:id,candidato:user.id })
      setActive(!Active)
    }
  
    let secondsToGo = 5;
    let title =Active ? 'A remover candidatura em breve':  'A sua candidatura sera enviada'
      
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

    
  useEffect(()=>{
    setUser(getUser())
    function receber(id){

    Api.post('solicitars',{vaga:id, candidato:user.id}).then((data)=>{
      console.log(data.data.sucesso, 'ismelio')
      setVagaId(data.data.sucesso)
      setActive(data.data.sucesso)
  }).catch((e)=>{
  console.log(e, 'erro')
  }) 
    } 
    receber(id)
    
  },[])

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
          
          <Link to={`/detalhes/${Id}`}>
          <button style={{ borderRadius:"4px"}}>
            <SendIcon />
            <span>Ver vaga</span>
          </button>
          </Link>
         
          
        </Row>
       
      </Container>
      
    </Panel>
    
    </>
  );
};

export default FeedPost;
