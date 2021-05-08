import React from "react";
import { Link } from 'react-router-dom'

export default function Empresa() {
  return (
    <>
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
                      Microsoft<span>Internet e Computacao de Software</span>
                    </h2>
                    <p>Now Hiring(102)</p>
                    <ul class="information">
                      <li>
                        <span>Endereço:</span>Menlo Park, CA
                      </li>
                      <li>
                        <span>Website:</span>Google.com
                      </li>
                      <li>
                        <span>Empregados:</span>50,000 - 70,000 employer
                      </li>
                      <li>
                        <span>Email:</span>info@google.com
                      </li>
                      <li>
                        <span>Desde:</span>1998
                      </li>
                      <li>
                        <Link to="/editar-perfil-empresa/:id" class="btn btn-common btn-sm" href="#">
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
                    <i class="fa fa-user fa-fw"></i> Sobre Microsoft
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
                    <i class="fa fa-leaf fa-fw"></i> Responsabilidades:
                  </div>

                  <div class="panel-body">
                    <p>
                      Rapid growth since incorporation has triggered a chain of
                      products, acquisitions and partnerships beyond Google's
                      core search engine (Google Search).
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
                    <i class="fa fa-coffee fa-fw"></i> Qualificacoes Minimas:
                  </div>

                  <div class="panel-body">
                    <p>
                      Rapid growth since incorporation has triggered a chain of
                      products.
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
                    <i class="fa fa-graduation-cap fa-fw"></i> Qualificacoes
                    Perferidas:
                  </div>

                  <div class="panel-body">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
