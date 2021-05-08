import React, { useRef } from "react";
import Avatar from "./avatar";
import { Form } from "@unform/web";
import { Link } from 'react-router-dom'

import DesktopHeader from "../../components/DesktopHeader";
import MobileHeader from "../../components/MobileHeader";

export default function Perfil() {
  const formRef = useRef();
  const handleFormSubmit = (data) => {
    console.log(data);
  };
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
                      Raul Cori<span>Desenvolvedor Web</span>
                    </h2>
                    <ul class="information">
                      <li>
                        <span>Nome:</span>Raul Cori
                      </li>
                      <li>
                        <span>Email:</span>daniel-duke@gmail.com
                      </li>
                      <li>
                        <span>Telefone:</span>+91 548 576 8579
                      </li>
                      <li>
                        <span>Data de Nascimento:</span>19 Agosto 2001
                      </li>
                      <li>
                        <Link to="/editar-conta/:id" class="btn btn-common btn-sm" href="#">
                          Editar Perfil
                        </Link>
                      </li>
                      <li>
                        <a class="btn btn-common btn-sm" href="#">
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
                    <ul>
                      <li>
                        Software testing in a Web Applications/Mobile
                        environment.
                      </li>
                      <li>
                        Software Test Plans from Business Requirement
                        Specifications for test engineering group.
                      </li>
                      <li>
                        Software testing in a Web Applications environment.
                      </li>
                      <li>Translate designs into responsive web interfaces</li>
                      <li>
                        Software testing in a Web Applications/Mobile
                        environment.
                      </li>
                      <li>
                        Software testing in a Web Applications environment.
                      </li>
                      <li>Translate designs into responsive web interfaces</li>
                      <li>
                        Software Test Plans from Business Requirement
                        Specifications for test engineering group.
                      </li>
                      <li>
                        Run production tests as part of software implementation;
                        Create, deliver and support test plans for testing group
                        to execute.
                      </li>
                      <li>
                        Run production tests as part of software implementation;
                        Create, deliver and support test plans for testing group
                        to execute.
                      </li>
                    </ul>
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
                    <span class="service-tag">Web Design</span>
                    <span class="service-tag">Graphics</span>
                    <span class="service-tag">Development</span>
                    <span class="service-tag">App design</span>
                    <span class="service-tag">IOS Apps</span>
                    <span class="service-tag">CMS Development</span>
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
