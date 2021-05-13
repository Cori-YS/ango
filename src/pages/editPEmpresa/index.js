import React, { useRef, useState, useEffect } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";
import Input from "../../components/components/fields/Input";
import Select from "../../components/components/fields/Select";
import TextArea from "../../components/components/fields/TextArea";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Api from "../../services/api";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";
export default function EditarEmpresa() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dado, setDado] = useState({})
  const [provincia, setProvincia] = useState([]);
  const [pais, setPais] = useState([]);
  const [area, setArea] = useState([]);
  const [digiTel, setDigitTel]= useState()
  const [digiSite, setDigiSite]= useState()
  const [digiSobre, setDigiSobre]= useState()
  const [digiQualificMin, setDigitQualificMin]= useState()
  const [digiQualificPer, setDigitQualificPer]= useState()
  const [digiArea, setDigitArea]= useState([])
  const [digiPais, setDigitPais]= useState([])
  const [digiResp, setDigitResp]= useState([])
  const [digiProvincia, setDigitProvincia]= useState([])
  const schema = yup.object({
    site: yup.string(),
    conctacto: yup.number().min(9),
    localizacaoId: yup.string(),
    sobre: yup.string(),
    responsabilidade: yup.string(),
    qualificaoesMin: yup.string(),
    qualificacoesPref: yup.string(),
    areaId: yup.string(),
  });

  async function handleSubmit(data, { reset }) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      reset();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      return;
    }

    try {
      data.idUser = id;
      data.owner = "empresa";
      const aux = await Api.post("/editarPerfil", { data });
      console.log(aux, "dadossssssssssssssssssss")
      if (aux.data.sucesso) {
        toast.success("Edição feita com sucesso");
        navigate(`/perfil-empresa/${id}`)
      }
    } catch (err) {}
  }
  const formRef = useRef(null);
  useEffect(() => {
    function receber() {
      Api.get(`/empresa/${id}`).then((dados)=>{
        setDado(dados?.data)
        console.log(dados?.data, "dados")
        setDigitTel(dados?.data?.conctacto);
        setDigiSite(dados?.data?.site);
        setDigiSobre(dados?.data?.sobre);
        setDigitQualificMin(dados?.data?.qualificaoesMin);
        setDigitQualificPer(dados?.data?.qualificacoesPref);
        setDigitArea([{label:dados.data?.areaId?.nome, value:dados.data?.areaId?._id}]);
        setDigitProvincia([{label:dados.data?.localizacaoId?.nome, value:dados.data?.localizacaoId?._id}]);
        setDigitResp(dados?.data?.responsabilidade);
      }).catch((e)=>{});

      Api.get("localizacao")
        .then((e) => {
          var aux = e.data.provincia.map((e) => ({
            label: e.nome,
            value: e._id,
          }));
          var aux1 = e.data.pais.map((e) => ({
            label: e.nome,
            value: e._id,
          }));
          setPais(aux1);
          setProvincia(aux);
        })
        .catch((e) => {
          console.log(e, "err");
        });

      Api.get("trabalho")
        .then((e) => {
          var aux = e.data.area.map((e) => ({
            label: e.nome,
            value: e._id,
          }));
          setArea(aux);
        })
        .catch((e) => {
          console.log(e, "err");
        });
    }

    receber(id);
  }, []);
  return (
    <>
    <DesktopHeader className="mt-8" />
    <MobileHeader />
      <section class="login-wrapper">
        <div class="container1">
          <Form
            class="container"
            schema={schema}
            onSubmit={handleSubmit}
            ref={formRef}
            style={{
              border: "1px solid #299be8",
              width: "410px",
              height: "1000px",
              margin: "auto",
            }}
          >
            <div class="row">
              <div class="col-md-8">
                <div class="form-group" style={{ display: "inline-block" }}>
                  
                </div>
              </div>

              <div class="col-md-8" style={{ right: "0" }}>
                
              </div>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="tel"
                  name="conctacto"
                  value={digiTel}
                  onChange={e => setDigitTel(e.target.value)}
                  class="form-control"
                  placeholder="Telefone"
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="text"
                  name="site"
                  value={digiSite}
                  onChange={e => setDigiSite(e.target.value)}
                  class="form-control"
                  placeholder="Website"
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>

              
              <div class="col-md-8">
                <label for="sobre-mim" class="form-label">
                  Sobre
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="sobre"
                  value={digiSobre}
                  onChange={e => setDigiSobre(e.target.value)}
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>

              <div class="col-md-8">
                <label for="responsabilidade" class="form-label">
                  Responsabilidades
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="responsabilidade"
                  id="responsabilidade"
                  value={digiResp}
                  onChange={e => setDigitResp(e.target.value)}
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>

              <div class="col-md-8">
                <label for="qualificacoes-minimas" class="form-label">
                  Qualificacoes Minimas
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="qualificaoesMin"
                  id="qualificacoes-minimas"
                  value={digiQualificMin}
                  onChange={e => setDigitQualificMin(e.target.value)}
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div class="col-md-8">
                <label for="qualificacoes-perferidas" class="form-label">
                  Qualificacoes Perferidas
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="qualificacoesPref"
                  id="qualificacoes-perferidas"
                  value={digiQualificPer}
                  onChange={e => setDigitQualificPer(e.target.value)}
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>

              <div class="col-md-8">
                <label for="provincia" class="form-label">
                  Provincia
                </label>
                <Select
                  class="form-control"
                  placeholder="Escolha a provincia"
                  name="localizacaoId"
                  value={digiProvincia}
                  onChange={e => setDigitProvincia(e)}
                  data={provincia}
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>
              <div class="col-md-8">
                <label for="area" class="form-label">
                  Area
                </label>
                <Select
                  class="form-control"
                  placeholder="Escolha a area"
                  name="areaId"
                  value={digiArea}
                  onChange={e => setDigitArea(e)}
                  data={area}
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>
              <div class="col-md-8">
                <div class="col-md-8">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ margin: "20px" }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
