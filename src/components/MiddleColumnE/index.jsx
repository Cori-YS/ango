import React, {useState, useEffect} from "react";

import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";
import { useAuth} from '../../auth'
import Api from '../../services/api';

import { Container } from "./styles";

const MiddleColumnE = () => {

  const { getUser} = useAuth()
  const [setor, setSetor]=useState([])
  const [user, setUser] = useState({});
  const [dados, setDados]=useState([])
  const [tag, setTag]= useState(<>,</>)

  useEffect(()=>{
    setUser(getUser())
    console.log(user.id, 'isme')
    function receber (){
      Api.get(`vaga/${user.id}`).then((data)=>{
       console.log('rau', data.data.Listagem)
       setDados(data.data.Listagem)
      }).catch((e)=>{
        console.error(e)
        console.log(user.id, 'isme')
      })
    }
  
    receber()
  },[])


  return (
    <>
    <Container className="middle-column">
      <FeedShare />
      {dados.map((e)=>(
        <FeedPost Id={e._id} data={e.createdAt} nomeVaga={e.nome} nomeEmpresa={e.utilizadorId.nome} overView={e.overview} setor ={e.setor.nome} idEmpresa={e.utilizadorId._id}/>
      ))}
      {tag}
      
    </Container>
   

    </>
  );
};

export default MiddleColumnE;
