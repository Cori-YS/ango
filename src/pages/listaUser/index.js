import React, {useState, useEffect} from "react";
import './index.css';
import { Link } from 'react-router-dom'
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";
import { useParams} from 'react-router-dom'
import Api from '../../services/api'

export default function ListUser() {
  const {id} = useParams()
  const [user, setUser] = useState([])
  const [dados, setDados]= useState([]);
  const [tag, setTag]= useState(<>,</>)

  useEffect(()=>{
    function receber(id){
      Api.get(`solicitar/${id}`).then((data)=>{
        console.log(data.data.Listagem, 'ismelio')
        setDados(data.data.Listagem)
        setUser(data.data.Listagem.candidato)
    }).catch((e)=>{
      console.log(e, 'erro')
    }) 
  } 
    receber(id)
  },[])

  return (
    <>
    <DesktopHeader className="mt-8" />
    <MobileHeader />
      <h3
        style={{
          backgroundColor: '#fff',
          color: '#313174',
          textAlign: 'center',
          fontSize: '36px',
          marginTop: '70px'
        }}
      >
        Candidatos a Vaga
      </h3>


      {dados.map((e)=>(
      <div className='container1'>
        <div className='avatar'>
          <img className='user' src='' alt='' />
          <h3>{e.candidato.nome}</h3>
        </div>
        <div>
        </div>
        <div className='button1'>
          <Link to={`/perfil-ver/${e.candidato.categoriaId}`}>
          <button className='btn10'>
            Ver Perfil
          </button>
          </Link>
        </div>
      </div>

        //<FeedPost Id={e._id} data={e.createdAt} nomeVaga={e.nome} nomeEmpresa={e.utilizadorId.nome} overView={e.overview} setor ={e.setor.nome} idEmpresa={e.utilizadorId._id}/>
      ))}
      {tag}
    </>
  );
}
