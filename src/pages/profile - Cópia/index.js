import React, { useRef, useState, useEffect } from "react";
import Avatar from "./avatar";
import { Form } from "@unform/web";
import { Link } from 'react-router-dom'
import {useAuth} from '../../auth';
import { useParams} from 'react-router-dom'
import Api from '../../services/api'
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";
import { useNavigate } from "react-router-dom";
export default function Perfil() {
  const {id} = useParams()
  const formRef = useRef();
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();
  const { getUser} =useAuth()
  const [user, setUser] = useState({})
  const [dados, setDados] = useState({})
  useEffect(()=>{
    setUser(getUser());
    function receber(id) {
      Api.get(`/candidato/${id}`).then((dados)=>{
        setDados(dados?.data);
      }).catch((e)=>{});
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
                <Form ref={formRef} onSubmit={handleFormSubmit}>
                  <Avatar name="avatar" />
                </Form>
                <div class="col-md-9 col-sm-9">
                  <div class="profile-content">
                    <h2>
                    {dados?.utilizadorId?.nome} <span> {dados?.areaId?.nome}</span>
                    </h2>
                    <ul class="information">
                      <li>
                        <span>Nome:</span>{dados?.utilizadorId?.nome}
                      </li>
                      <li>
                        <span>Email:</span>{dados?.utilizadorId?.email}
                      </li>
                      <li>
                        <span>Telefone:</span>{dados?.conctacto}
                      </li>
                      <li>
                        <span>Data de Nascimento:</span>{dados?.dataNascimento}
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
                    <i class="fa fa-user fa-fw"></i> Sobre Mim
                  </div>

                  <div class="panel-body">
                    <p>
                      {dados?.sobreMin}
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-leaf fa-fw"></i> Responsabilidades:
                  </div>

                  <div class="panel-body">
                    <p>
                      {dados?.reponsabilidade}
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-cog fa-fw"></i> Habilidades
                  </div>

                  <div class="panel-body">
                    <p>
                      {dados?.habilidades}
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
