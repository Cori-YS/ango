import React, { useEffect, useState } from "react";
import Api from "../services/api";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import "antd/dist/antd.css";
export default function Home() {
  const [Empresa, setEmprsas] = useState(0);
  const [Candidatos, setCandidato] = useState(0);
  const [Vaga, setVagas] = useState(0);
  const [dados, setDados] = useState([]);
  const [tag, setTag] = useState(<>,</>);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  useEffect(() => {
    async function teste() {
      const dados = await Api.get("home");
      const { Empresas, Candidato, Vagas } = dados.data;
      setEmprsas(Empresas);
      setCandidato(Candidato);
      setVagas(Vagas);
    }
    function receber() {
      Api.get("/vaga")
        .then((data) => {
          console.log("rau", data.data.Listagem);
          setDados(data.data.Listagem);
        })
        .catch((e) => {
          alert();
          console.error(e);
        });
    }
    receber();
    teste();
  }, []);
  function myFunction(event) {
    event.preventDefault();

    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }

  return (
    <>
      <nav>
        <ul className="topnav">
          <li>
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">Início</Link>
          </li>

          <li>
            <Link to="/entrar">Login</Link>
          </li>
          <li className="icon">
            <a href=" " onClick={myFunction}>
              &#9776;
            </a>
          </li>
        </ul>
      </nav>
      <section class="banner">
        <div class="container">
          <div class="caption">
            <h2>
              Procurando um emprego, estagio, ou querendo divulgar vagas para a
              sua empresa? Está no melhor lugar
            </h2>
            <Link to="/criar-conta">
              {" "}
              <button type="button" style={{ borderRadius: "4px" }}>
                Registar candidato
              </button>
            </Link>
            <Link to="/cadastro-empresa">
              {" "}
              <button type="button" style={{ borderRadius: "4px" }}>
                Registar empresa
              </button>
            </Link>
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
        <div
          class="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
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
              {dados.slice(0, 5).map((e) => (
                <div class="job-list">
                  <div class="thumb">
                    <Link to="/entrar">
                      <img src="assets/img/jobs/img-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="job-list-content">
                    <h4>
                      <Link to="/entrar">{e.nome}</Link>
                      <span class="full-time">
                        {e.tipoVaga == "1" && "Estagio"}
                        {e.tipoVaga == "2" && "Integral"}
                      </span>
                    </h4>
                    <p>{e.overview}</p>
                    <div class="job-tag">
                      <div class="pull-left">
                        <div class="meta-tag">
                          <span>
                            <Link to="/entrar">
                              <i class="ti-brush"></i>
                              {e.setor.nome}
                            </Link>
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
              ))}
              {tag}
            </div>
          </div>
        </div>
      </section>

      <section class="featured-jobs section">
        <div class="container">
          <h2 class="section-title">Vagas Recentes</h2>
          <div class="row">
            {dados.slice(0, 7).map((e) => (
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
                          <Link to="/entrar">{e.nome}</Link>
                        </h3>
                        <div class="adderess"></div>
                      </div>
                    </div>
                  </div>
                  <div class="item-foot">
                    <span>
                      <i class="ti-calendar"></i> {e.createdAt} atrás
                    </span>
                    <span>
                      <i class="ti-time"></i> {e.tipoVaga == "1" && "Estagio"}{" "}
                      {e.tipoVaga == "2" && "Integral"}
                    </span>
                    <div class="view-iocn">
                      <Link to="/entrar">
                        <i class="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              //<FeedPost Id={e._id} data={e.createdAt} nomeVaga={e.nome} nomeEmpresa={e.utilizadorId.nome} overView={e.overview} setor ={e.setor.nome} idEmpresa={e.utilizadorId._id}/>
            ))}
            {tag}
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
                  Raul Inácio <span>(Desenvolvedor)</span>
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
                  Ismelio Cori <span>(Designer - Analista)</span>
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
