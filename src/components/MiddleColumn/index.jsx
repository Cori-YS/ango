import React, {useState, useEffect} from "react";

import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";
import { useAuth} from '../../auth'
import { Container } from "./styles";
import Api from '../../services/api';
const MiddleColumn = () => {

  const { getUser} = useAuth()
  const [setor, setSetor]=useState([])
  const [user, setUser] = useState({});
  const [dados, setDados]=useState([])
  const [tag, setTag]= useState(<>,</>)
useEffect(()=>{
  function receber (){
    Api.get('/vaga').then((data)=>{
     console.log('rau', data.data.Listagem)
     setDados(data.data.Listagem)
    }).catch((e)=>{
      alert()
      console.error(e)
    })
  }

  receber()
},[])


//
  return (

    <>
    <Container className="middle-column">
       {dados.map((e)=>(
         <FeedPost Id={e._id} data={e.createdAt} nomeVaga={e.nome} nomeEmpresa={e.utilizadorId.nome} overView={e.overview} setor ={e.setor.nome} idEmpresa={e.utilizadorId._id}/>
       ))}
       {tag}
         
    </Container>
   

    </>
  );
};

export default MiddleColumn;
