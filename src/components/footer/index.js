import React from "react";

export default function Footer() {
  return (
    <>
      <footer style={{ padding: "0px" }}>
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">
                    <img
                      src="assets/img/logo.png"
                      className="img-responsive"
                      alt="Footer Logo"
                    />
                  </h3>
                  <div className="textwidget">
                    <p>
                      AngoSalo é um aplicativo web que busca, facilitar a
                      pesquisa e divulgação de vagas de emprego assim como
                      busca, facilitar a interação entre as empresas e os
                      usuarios
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Links Rapidos</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                      <a href="#">Licensa</a>
                    </li>
                    <li>
                      <a href="#">Termos & Condiçõess</a>
                    </li>
                    <li>
                      <a href="#">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Vagas em Alta</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Android Developer</a>
                    </li>
                    <li>
                      <a href="#">Senior Accountant</a>
                    </li>
                    <li>
                      <a href="#">Frontend Developer</a>
                    </li>
                    <li>
                      <a href="#">Junior Tester</a>
                    </li>
                    <li>
                      <a href="#">Project Manager</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Nos Siga</h3>

                  <p>Junte-se a nossa lista de emails</p>
                  <form className="subscribe-box">
                    <input type="text" placeholder="Your email" />
                    <input
                      type="submit"
                      className="btn-system"
                      value="Enviar"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>
                    Todos os Direitos Reservados &copy; 2021 - Desenhado &
                    Desenvolvido por{" "}
                    <a rel="nofollow" href="">
                      Raul&Ismélio
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
