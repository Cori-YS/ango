import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import {useAuth} from '../../auth';
import { useNavigate } from "react-router-dom";
import DesktopHeader from "../../components/DesktopHeaderImg";
import MobileHeader from "../../components/MobileHeaderImg";
import { useParams} from 'react-router-dom'
import Api from '../../services/api'
export default function Empresa() {
  const {id} = useParams();

  const navigate = useNavigate();
  const { getUser} =useAuth()
  const [user, setUser] = useState({})
  const [dado, setDado] = useState({})
  useEffect(()=>{
    setUser(getUser());

   async function receber(id){
    await Api.get(`/empresa/${id}`).then((dados)=>{
      setDado(dados?.data)
      console.log(dados?.data, "dados")
    }).catch((e)=>{})
    }

receber(id)
    
  },[])


  return (
    <>
    <DesktopHeader className="mt-8" />
    <MobileHeader />
      <section class="profile-detail">
        <div class="container">
          <div class="col-md-12">
            <div class="row">
              <div class="basic-information">
                <div class="col-md-3 col-sm-3">
                  <img src="img/microsoft.png" alt="" class="img-responsive" />
                </div>
                <div class="col-md-9 col-sm-9">
                  <div class="profile-content">
                    <h2>
                     {dado?.utilizadorId?.nome}<span>{dado?.areaId?.nome}</span>
                    </h2>
                    <ul class="information">
                      <li>
                        <span>Endereço:</span>{dado?.localizacaoId?.nome}
                      </li>
                      <li>
                        <span>Website:</span> {dado?.site}
                      </li>
                      <li>
                        <span>Contacto:</span> {dado?.conctacto}
                      </li>
                      <li>
                        <span>Email:</span>{dado?.utilizadorId?.email}
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="social">
                  <li>
                    <a href="" class="facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="google">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" class="instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-user fa-fw"></i> Sobre{ ' '}{dado?.utilizadorId?.nome}
                  </div>

                  <div class="panel-body">
                    <p>
                    {dado?.sobre}
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-leaf fa-fw"></i> Responsabilidades:
                  </div>

                  <div class="panel-body">
                    <p>
                     {dado?.responsabilidade}
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-coffee fa-fw"></i> Qualificacoes Minimas:
                  </div>

                  <div class="panel-body">
                    <p>
                      {dado?.qualificaoesMin}
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-graduation-cap fa-fw"></i> Qualificacoes
                    Perferidas:
                  </div>

                  <div class="panel-body">
                  <p>
                     {dado?.qualificacoesPref}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
