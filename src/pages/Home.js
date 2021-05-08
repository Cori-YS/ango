import React,  {useEffect, useState}from "react";
import Api from '../services/api'
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from 'react-router-dom'
import { Carousel } from "antd";
import "antd/dist/antd.css";
export default function Home() {
const [Empresa, setEmprsas] =useState(0);
const [Candidatos, setCandidato] =useState(0);
const [Vaga, setVagas] =useState(0);



  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
 
  useEffect(()=>{
   async function teste(){
 const dados= await Api.get('home');
 const {Empresas, Candidato, Vagas} =dados.data
 setEmprsas(Empresas)
setCandidato(Candidato)
setVagas(Vagas)
    }

    teste();
  }, [])
  



  return (
    <>
      <Header />
      <section class="banner">
        <div class="container">
          <div class="caption">
            <h2>
              Procurando um emprego, estagio, ou querendo divulgar vagas para a
              sua empresa? Está no melhor lugar
            </h2>
            <Link to='/criar-conta'> <button type="button" style={{ borderRadius: "4px" }}>
              Registar candidato
            </button></Link> 
           <Link to='/cadastro-empresa'> <button type="button" style={{ borderRadius: "4px" }}>
              Registar empresa
            </button></Link>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-dial"></span>
              </span>
              <h3>Criar uma conta</h3>
              <p>
                Crie uma conta para que possa ter acesso a todas as vagas
                disponiveis no nosso site.
              </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-search"></span>
              </span>
              <h3>Procurar pelo trabalho</h3>
              <p>Ache aqui o trabalho dos seus sonhos, seja um dos sortudos</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-printer"></span>
              </span>
              <h3>Envie o seu resumo</h3>
              <p>Organize o seu curriculo. Nos diga as suas experiências</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-dial"></span>
              </span>
              <h3>Criar uma conta</h3>
              <p>
                Crie uma conta para que possa ter acesso a todas as vagas
                disponiveis no nosso site.
              </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-search"></span>
              </span>
              <h3>Procurar pelo trabalho</h3>
              <p>Ache aqui o trabalho dos seus sonhos, seja um dos sortudos.</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="features-content">
              <span class="box1">
                <span aria-hidden="true" class="icon-printer"></span>
              </span>
              <h3>Envie o seu resumo</h3>
              <p>Organize o seu curriculo. Nos diga as suas experiências</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#299be8" }}>
        <div class="container">
          <div class="col-md-3 col-sm-3">
            <div class="counter-text">
              <span aria-hidden="true" class="icon-briefcase"></span>
              <h3>{Vaga.length}</h3>
              <p>Trabalhos Postados</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-3">
            <div class="counter-text">
              <span class="box1">
                <span aria-hidden="true" class="icon-expand"></span>
              </span>
              <h3>{Empresa.length}</h3>
              <p>Todas Companhias</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-3">
            <div class="counter-text">
              <span class="box1">
                <span aria-hidden="true" class="icon-profile-male"></span>
              </span>
              <h3>{Candidatos.length}</h3>
              <p>Total de Membros</p>
            </div>
          </div>
        </div>
      </section>
      <section class="find-job section">
        <div class="container">
          <h2 class="section-title">Vagas em alta</h2>
          <div class="row">
            <div class="col-md-12">
              <div class="job-list">
                <div class="thumb">
                  <Link to="/entrar">
                    <img src="assets/img/jobs/img-1.jpg" alt="" />
                  </Link>
                </div>
                <div class="job-list-content">
                  <h4>
                    <Link to="/entrar">Need a web designer</Link>
                    <span class="full-time">Integral</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum quaerat aut veniam molestiae atque dolorum omnis
                    temporibus consequuntur saepe. Nemo atque consectetur saepe
                    corporis odit in dicta reprehenderit, officiis, praesentium?
                  </p>
                  <div class="job-tag">
                    <div class="pull-left">
                      <div class="meta-tag">
                        <span>
                          <Link to="/entrar">
                            <i class="ti-brush"></i>Art/Design
                          </Link>
                        </span>
                        <span>
                          <i class="ti-location-pin"></i>Washington, USA
                        </span>
                        <span>
                          <i class="ti-time"></i>60/Horas
                        </span>
                      </div>
                    </div>
                    <div class="pull-right">
                      <div class="icon">
                        <i class="ti-heart"></i>
                      </div>
                      <Link to="/entrar" class="btn btn-common btn-rm">
                        Mais Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="job-list">
                <div class="thumb">
                  <Link to="/entrar">
                    <img src="assets/img/jobs/img-2.jpg" alt="" />
                  </Link>
                </div>
                <div class="job-list-content">
                  <h4>
                    <Link to="/entrar">Front-end developer needed</Link>
                    <span class="full-time">Integral</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum quaerat aut veniam molestiae atque dolorum omnis
                    temporibus consequuntur saepe. Nemo atque consectetur saepe
                    corporis odit in dicta reprehenderit, officiis, praesentium?
                  </p>
                  <div class="job-tag">
                    <div class="pull-left">
                      <div class="meta-tag">
                        <span>
                          <Link to="/entrar">
                            <i class="ti-desktop"></i>Technologies
                          </Link>
                        </span>
                        <span>
                          <i class="ti-location-pin"></i>Cupertino, CA, USA
                        </span>
                        <span>
                          <i class="ti-time"></i>60/Horas
                        </span>
                      </div>
                    </div>
                    <div class="pull-right">
                      <div class="icon">
                        <i class="ti-heart"></i>
                      </div>
                      <Link to="/entrar" class="btn btn-common btn-rm">
                        Mais Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="job-list">
                <div class="thumb">
                  <Link to="/entrar">
                    <img src="assets/img/jobs/img-3.jpg" alt="" />
                  </Link>
                </div>
                <div class="job-list-content">
                  <h4>
                    <Link to="/entrar">Senior Accountant</Link>
                    <span class="part-time">Estágio</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum quaerat aut veniam molestiae atque dolorum omnis
                    temporibus consequuntur saepe. Nemo atque consectetur saepe
                    corporis odit in dicta reprehenderit, officiis, praesentium?
                  </p>
                  <div class="job-tag">
                    <div class="pull-left">
                      <div class="meta-tag">
                        <span>
                          <Link to="/entrar">
                            <i class="ti-home"></i>Finance
                          </Link>
                        </span>
                        <span>
                          <i class="ti-location-pin"></i>Delaware, USA
                        </span>
                        <span>
                          <i class="ti-time"></i>60/Horas
                        </span>
                      </div>
                    </div>
                    <div class="pull-right">
                      <div class="icon">
                        <i class="ti-heart"></i>
                      </div>
                      <Link to="/entrar" class="btn btn-common btn-rm">
                        Mais Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="job-list">
                <div class="thumb">
                  <Link to="/entrar">
                    <img src="assets/img/jobs/img-4.jpg" alt="" />
                  </Link>
                </div>
                <div class="job-list-content">
                  <h4>
                    <Link to="/entrar">
                      Fullstack web developer needed
                    </Link>
                    <span class="full-time">Integral</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum quaerat aut veniam molestiae atque dolorum omnis
                    temporibus consequuntur saepe. Nemo atque consectetur saepe
                    corporis odit in dicta reprehenderit, officiis, praesentium?
                  </p>
                  <div class="job-tag">
                    <div class="pull-left">
                      <div class="meta-tag">
                        <span>
                          <Link to="/entrar">
                            <i class="ti-desktop"></i>Technologies
                          </Link>
                        </span>
                        <span>
                          <i class="ti-location-pin"></i>New York, USA
                        </span>
                        <span>
                          <i class="ti-time"></i>60/Horas
                        </span>
                      </div>
                    </div>
                    <div class="pull-right">
                      <div class="icon">
                        <i class="ti-heart"></i>
                      </div>
                      <Link to="/entrar" class="btn btn-common btn-rm">
                        Mais Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="showing pull-left">
                <a href="#">
                  Mostrando <span>6-10</span> De 24 Vagas
                </a>
              </div>
              <ul class="pagination pull-right">
                <li class="active">
                  <a href="#" class="btn btn-common">
                    <i class="ti-angle-left"></i> Anterior
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="active">
                  <a href="#" class="btn btn-common">
                    Proximo <i class="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="featured-jobs section">
        <div class="container">
          <h2 class="section-title">Vagas Recentes</h2>
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Graphic Designer</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> Dallas, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 4 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Integral
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Software Engineer</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> Delaware, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 5 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Estágio
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-3.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Managing Director</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> NY, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 3 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Integral
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-3.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Graphic Designer</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> Washington, United
                        States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 1 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Estágio
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Software Engineer</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> Dallas, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 6 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Integral
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="featured-item">
                <div class="featured-wrap">
                  <div class="featured-inner">
                    <figure class="item-thumb">
                      <Link class="hover-effect" to="/entrar">
                        <img src="assets/img/features/img-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div class="item-body">
                      <h3 class="job-title">
                        <Link to="/entrar">Managing Director</Link>
                      </h3>
                      <div class="adderess">
                        <i class="ti-location-pin"></i> NY, United States
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-foot">
                  <span>
                    <i class="ti-calendar"></i> 7 Meses atrás
                  </span>
                  <span>
                    <i class="ti-time"></i> Estágio
                  </span>
                  <div class="view-iocn">
                    <Link to="/entrar">
                      <i class="ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="section">
        <div class="container">
          <Carousel autoplay>
            <div class="item text-center">
              <div style={{ textAlign: "center" }}>
                <img
                  class="img-member"
                  src="assets/img/testimonial/img1.jpg"
                  alt=""
                  style={{ margin: "0 auto" }}
                />
              </div>
              <div class="client-info">
                <h2 class="client-name" style={{ color: " #fff" }}>
                  Raul Inácio <span>(Project Menager)</span>
                </h2>

                <p>
                  <i class="fa fa-quote-left quote-left"></i> A nossa equipa
                  durante o desenvolvimento deste projeto... foi extremamente
                  profissional <i class="fa fa-quote-right quote-right"></i>
                  <br /> Durante a criação deste projeto demos o nosso melhor
                  para nos certificarmos de que as expectativas da instituição
                  fossem alcançadas <br />{" "}
                </p>
              </div>
            </div>

            <div class="item text-center">
              <img
                class="img-member"
                src="assets/img/testimonial/img2.jpg"
                alt=""
                style={{ margin: "0 auto" }}
              />
              <div class="client-info">
                <h2 class="client-name" style={{ color: " #fff" }}>
                  Ismelio Cori <span>(Project Menager)</span>
                </h2>
              </div>
              <p>
                <i class="fa fa-quote-left quote-left"></i> A nossa equipa
                durante o desenvolvimento deste projeto... foi extremamente
                profissional <i class="fa fa-quote-right quote-right"></i>
                <br /> Durante a criação deste projeto demos o nosso melhor para
                nos certificarmos de que as expectativas da instituição fossem
                alcançadas <br />{" "}
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      <section class="clients section">
        <div class="container">
          <h2 class="section-title" style={{ textAalign: "center" }}>
            Clientes & Parceiros
          </h2>
          <div class="row">
            <div id="clients-scroller" style={{ display: "flex" }}>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img1.png"
                  alt=""
                />
                ,
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img2.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img3.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img4.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img5.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img6.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img6.png"
                  alt=""
                />
              </div>
              <div class="items">
                <img
                  style={{ height: "130px" }}
                  src="assets/img/clients/img6.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
