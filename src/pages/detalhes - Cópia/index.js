import React from "react";
import { Link } from 'react-router-dom'

export default function Detalhe() {
  return (
    <>
      <section class="job-detail section">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8">
              <div class="">
                <h2 class="medium-title">Informacao do Trabalho</h2>
                <div class="basic-information">
                  <div class="text-left">
                    <h3>
                      <a href="#">Desenvolvedor Web</a>
                    </h3>
                    <p>
                      LemonKids LLC <em>(View All Jobs)</em>
                    </p>
                    <div class="meta">
                      <span>
                        <a href="#">
                          <i class="ti-location-pin"></i> Nationwide
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="ti-calendar"></i> Dec 30, 2017 - Feb 20,
                          2018
                        </a>
                      </span>
                    </div>
                    <strong class="price">
                      <i class="fa fa-money"></i>$7000 - $7500
                    </strong>
                    <Link to="/editar-vaga/:id" class="btn btn-common btn-sm">
                      Editar Vaga
                    </Link>
                    <Link to="/editar-vaga/:id" class="btn btn-common btn-sm">
                      Apagar Vaga
                    </Link>
                  </div>
                  <div class="clearfix">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-user fa-fw"></i> Overview
                      </div>

                      <div class="panel-body">
                        <p>
                          LemonKids LLC. In marketing communications, we dream
                          it and create it. All of the company’s promotional and
                          communication needs are completed in-house by these
                          “creatives” in an advertising agency-based set-up.
                          This includes everything from advertising, promotions
                          and print production to media relations, exhibition
                          coordination and website maintenance. Everyone from
                          artists, writers, designers, media buyers, event
                          coordinators, video producers/editors and public
                          relations specialists work together to bring campaigns
                          and product-centric promotions to life.
                        </p>
                        <p>
                          If you’re a dreamer, gather up your portfolio and show
                          us your vision. Garmin is adding one more enthusiastic
                          individual to our in-house Communications expert team.
                        </p>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-coffee fa-fw"></i> Qualificacoes
                      </div>

                      <div class="panel-body">
                        <p>
                          Minimum of 5 years creative experience in a graphic
                          design studio or advertising ad agency environment is
                          required. Qualified candidates for this role will
                          possess the following education, experience and
                          skills:
                        </p>
                        <ul>
                          <li>
                            Demonstrated strong and effective verbal, written,
                            and interpersonal communication skills
                          </li>
                          <li>
                            Must be team-oriented, possess a positive attitude
                            and work well with others
                          </li>
                          <li>
                            Ability to prioritize and multi-task in a flexible,
                            fast paced and challenging environment
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-graduation-cap fa-fw"></i>{" "}
                        Responsabilidades chave tambem incluem
                      </div>

                      <div class="panel-body">
                        <ul>
                          <li>
                            Provide technical health advice to Head of Country
                            Programmes and field advisors at all key stages of
                            the project management cycle including needs
                            assessment.
                          </li>
                          <li>
                            Technical strategy and design, implementation as
                            well as sector specific monitoring and evaluation.
                          </li>
                          <li>
                            This includes travel to field programmes as well as
                            review of proposals, key reports and surveys prior
                            to external submission.
                          </li>
                          <li>
                            Stay abreast of current best practice. Research and
                            stay informed on academic and technical health and
                            nutrition issues, techniques, and guidelines to
                            inform and improve programming.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-leaf fa-fw"></i> Requerimentos
                      </div>

                      <div class="panel-body">
                        <ul>
                          <li>
                            Must have minimum of 3 years experience running,
                            maneuvering, driving, and navigating equipment such
                            as bulldozer, excavators, rollers, and front-end
                            loaders.
                          </li>
                          <li>
                            Must have minimum of 3 years experience running,
                            maneuvering, driving, and navigating equipment such
                            as bulldozer, excavators, rollers, and front-end
                            loaders. Strongly prefer candidates with High School
                            Diploma
                          </li>
                          <li>
                            Must be able to perform physical activities that
                            require considerable use of your arms and legs and
                            moving your whole body, such as climbing, lifting,
                            balancing, walking, stooping, and handling of
                            materials.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <i class="fa fa-leaf fa-fw"></i> Beneficios
                      </div>

                      <div class="panel-body">
                        <ul>
                          <li>
                            Must have minimum of 3 years experience running,
                            maneuvering, driving, and navigating equipment such
                            as bulldozer, excavators, rollers, and front-end
                            loaders.
                          </li>
                          <li>
                            Strongly prefer candidates with High School Diploma
                          </li>
                          <li>
                            Must be able to perform physical activities that
                            require considerable use of your arms and legs and
                            moving your whole body, such as climbing, lifting,
                            balancing, walking, stooping, and handling of
                            materials.
                          </li>
                        </ul>
                        <Link to="/editar-vaga/:id" class="btn btn-common btn-sm">
                          Editar Vaga
                        </Link>
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
                      <a href="#">LemonKids LLC</a>
                    </h4>
                    <p>
                      LemonKids LLC. In marketing communications, we dream it
                      and create it. All of the company’s promotional and
                      communication needs are completed in-house.
                    </p>
                    <strong>Industry</strong>
                    <p>Insurance</p>
                    <strong>Type of Business Entity</strong>
                    <p>Sole Proprietorship</p>
                    <strong>Established In</strong>
                    <p>01 January, 2000</p>
                    <strong>No. of Employees</strong>
                    <p>105</p>
                    <strong>Location</strong>
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
