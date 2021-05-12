import React, { useRef, useState, useEffect } from "react";
import Avatar from "./avatar";
import { Form } from "@unform/web";
import { Link } from 'react-router-dom'
import {useAuth} from '../../auth';
import { useParams} from 'react-router-dom'
import Api from '../../services/api'
import DesktopHeader from "../../components/DesktopHeaderImg";
import MobileHeader from "../../components/MobileHeaderImg";
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
  useEffect(()=>{
    setUser(getUser());
    function receber(id) {
      Api.get(`candidato/${id}`).then((data) => {
        console.log(data.data, "ismel")
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
                      {user.nome}<span>Desenvolvedor Web</span>
                    </h2>
                    <ul class="information">
                      <li>
                        <span>Nome:</span>{user.nome}
                      </li>
                      <li>
                        <span>Email:</span>{user.email}
                      </li>
                      <li>
                        <span>Telefone:</span>+91 548 576 8579
                      </li>
                      <li>
                        <span>Data de Nascimento:</span>
                      </li>
                      <li>
                        <Link to={`/editar-conta/${id}`} class="btn btn-common btn-sm" href="#">
                          Editar Perfil
                        </Link>
                      </li>
                      <li>
                        <a class="btn btn-common btn-sm" href="#" onClick={e => {e.preventDefault(); localStorage.clear();navigate('/home') }}>
                          Terminar Sessão
                        </a>
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
                      The front end is the part that users see and interact
                      with, includes the User Interface, the animations, and
                      usually a bunch of logic to talk to the backend. It is the
                      visual bit that the user interacts with. This includes the
                      design, images, colours, buttons, forms, typography,
                      animations and content. It’s basically everything that you
                      as a user of the website can see.
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-leaf fa-fw"></i> Responsabilidades:
                  </div>

                  <div class="panel-body">
                    <p>
                      The front end is the part that users see and interact
                      with, includes the User Interface, the animations, and
                      usually a bunch of logic to talk to the backend. It is the
                      visual bit that the user interacts with.
                    </p>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <i class="fa fa-cog fa-fw"></i> Habilidades
                  </div>

                  <div class="panel-body">
                    <p>
                      The front end is the part that users see and interact
                      with, includes the User Interface, the animations, and
                      usually a bunch of logic to talk to the backend.
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
