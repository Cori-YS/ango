import React, {useEffect, useState} from "react";
import './index1.css';
import { Link } from 'react-router-dom'
import { useAuth} from '../../auth'
import DesktopHeader from "../../components/DesktopHeaderE";
import MobileHeader from "../../components/MobileHeaderE";
import ReactDOM from "react-router-dom"
import Api from '../../services/api';


export default function Procurar() {
  const { getUser} = useAuth()
  const [procura, setProcura] = React.useState("");
  const [user, setUser] = useState({});
  const [resultado, setResultado] = React.useState([]);
  const [dados, setDados]=useState([])
  const [tag, setTag]= useState(<>,</>)
  const handleChange = event => {
    setProcura(event.target.value);
  };

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
    setUser(getUser());
    receber()
  },[])

  useEffect(() => {
    const results = dados.filter(dados =>
      dados.nome.toLowerCase().includes(procura)
    );
    setResultado(results);
  }, [procura]);


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
        Procurar
      </h3>
      <form> 
        <div class='container1'>  
          <input type='search' id='busca' value={procura} onChange={handleChange} name='q' style={{border: 'none'}}/>
          <button type='submit'  style={{border: 'none', height: '100%', width: '50px', top: '0', right: '0'}}>OK</button>
        </div>

      </form>


      {resultado.map((e) => (
        <div className='container1' style={{border: '1px solid #dddddd', marginBottom: '10px'}}>
        <div className='avatar'>
          <img  className='user' src='' alt='' />
          <h3>{e.nome}</h3>
        </div>

        <div className='container1'>
          <p>
            {e.overview}
          </p>
        </div>
        <div className='button'>
          <Link to={`/detalhes-vaga/${e._id}`}>
          <button className='btn' style={{border: 'none', background: '#299BE8'}}>
            Ver Vaga
          </button>
          </Link>
        </div>
      </div>
      ))} 
      {tag}
      

    </>
  );
}
