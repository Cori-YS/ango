import React, {useState, useEffect} from "react";
import { useParams} from 'react-router-dom'
import Api from '../../services/api'
import { Modal} from 'antd';
import { useAuth} from '../../auth'
import DesktopHeader from "../../components/DesktopHeaderImg";
import MobileHeader from "../../components/MobileHeaderImg";

export default function Detalhe() {
  const { getUser} =useAuth()
  const [user, setUser] = useState({})
  const [Active, setActive] =useState(false)
  const [dados, setDados]= useState([]);
const [setor, setSetor] =useState([])
const [empresa, setEmpresa]=useState({})
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
      Api.get(`vagas/${id}`).then((data)=>{
        console.log(data.data.Listagem, 'ismelio')
    setDados(data.data.Listagem)
    setEmpresa(data.data.Listagem.utilizadorId)
    setSetor(data.data.Listagem.setor)
    }).catch((e)=>{
    console.log(e, 'erro')
    }) 

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
    <DesktopHeader className="mt-8" />
    <MobileHeader />

  <section class="job-detail section">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8">
              <div class="">
                <h2 class="medium-title">Informacao da Vaga</h2>
                <div class="basic-information">
                  <div class="text-left">
                     
                    <h3>
                      <a href="#">{dados.nome}</a>
                    </h3>
                    <p>
                 {setor.nome}
                    </p>
                    <div class="meta">
                      <span>
                        <a href="#">
                          <i class="ti-calendar"></i> {dados.createdAt}
                        </a>
                      </span>
                    </div>
                    <a href="#" class="btn btn-border btn-sm">
                      {dados.tipoVaga =="1" && "Estagio"}
                      {dados.tipoVaga =="2" && "Integral"}
                    </a>
                    <a href="#" class="btn btn-common btn-sm" onClick={(e) => {
                      e.preventDefault();
                      countdown();
                    }}>
                      {!Active && (<span> Aplicar Para Este {dados.tipoVaga =="1" ? "Estagio" : "Trabalho"}</span>)}
                      {Active && (<span> Remover aplicação Para Este {dados.tipoVaga =="1" ? "Estagio" : "Trabalho"} </span>)}
                    </a>
                  </div>
                  <div class="clearfix">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-user fa-fw"></i> Overview
                      </div>

                      <div class="panel-body">
                        <p>
                          {dados.overview}
                        </p>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-coffee fa-fw"></i> Qualificacoes
                      </div>

                      <div class="panel-body">
                        <p>
                         {dados.qualificacoes}
                        </p>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-graduation-cap fa-fw"></i>{" "}
                        Responsabilidades chave tambem incluem
                      </div>

                      <div class="panel-body">
                        <p>
                        {dados.responsabilidade}
                        </p>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-leaf fa-fw"></i> Requerimentos
                      </div>

                      <div class="panel-body">

                        <p>
                        {dados?.requerimento}
                        </p>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-leaf fa-fw"></i> Beneficios
                      </div>

                      <div class="panel-body">
                        <p>
                        {dados.beneficios}
                        </p>
                        <a href="#" class="btn btn-common btn-sm" onClick={(e) => {
                      e.preventDefault();
                      countdown();
                    }}>
                      {!Active && (<span> Aplicar Para Este {dados.tipoVaga =="1" ? "Estagio" : "Trabalho"}</span>)}
                      {Active && (<span> Remover aplicação Para Este {dados.tipoVaga =="1" ? "Estagio" : "Trabalho"} </span>)}
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside>
              <div class="col-md-3">
                <h2 class="medium-title">Companhia</h2>
                <div class="">
                  <div class="basic-information">
                    <h4>
                      <a href="#">{empresa.nome}</a>
                    </h4>
                    <p>
                      LemonKids LLC. In marketing communications, we dream it
                      and create it. All of the company’s promotional and
                      communication needs are completed in-house.
                    </p>
                    <strong>Area</strong>
                    <p>Insurance</p>
                    <strong>Localização</strong>
                    <p>New York, NY </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
    </>
  );
}
