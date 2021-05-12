import React, { useRef, useEffect, useState } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";
import Input from "../../components/components/fields/Input";
import Select from "../../components/components/fields/Select";
import TextArea from "../../components/components/fields/TextArea";

import DesktopHeader from "../../components/DesktopHeaderImg";
import MobileHeader from "../../components/MobileHeaderImg";
import ReactDOM from "react-router-dom";
import Api from "../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Editar() {
  const { id } = useParams();
  const [provincia, setProvincia] = useState([]);
  const [pais, setPais] = useState([]);
  const [digiTel, setDigiTel] = useState();
  const [digiData, setDigiData] = useState();
  const [digiRes, setDigiRes] = useState();
  const [digiSobre, setDigiSobre] = useState();
  const [digiHab, setDigiHab] = useState();
  const [digiPro, setDigiPro] = useState([]);
  const [digiArea, setDigiArea] = useState([]);
  const [area, setArea] = useState([]);

  const schema = yup.object({
    conctacto: yup.number('Digite um número valido').min(9, 'deve ser valido').positive(),
    dataNascimento: yup.date('deve ser valido').required('Digite uma data'),
    pais: yup.string('deve ser valido'),
    localizacaoId: yup.string('deve ser valido'),
    sobreMin: yup.string('deve ser valido'),
    reponsabilidade: yup.string('deve ser valido'),
    habilidades: yup.string('deve ser valido'),
    areaId: yup.string('deve ser valido'),
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
      data.owner = "candidato";
      const aux = await Api.post("/editarPerfil", { data });

      if (aux.data.sucesso) {
        toast.success("Edição feita com sucesso");
      }
    } catch (err) {}
  }
  const formRef = useRef(null);

  useEffect(() => {
    function receber(id) {
      Api.get(`/candidato/${id}`).then((dados)=>{
        console.log(dados.data, 'dada')
        setDigiTel(dados?.data?.conctacto);
        setDigiData(dados?.data?.dataNascimento);
        setDigiRes(dados?.data?.reponsabilidade);
        setDigiSobre(dados?.data?.sobreMin);
        setDigiHab(dados?.data?.habilidades);
        setDigiArea([{label:dados.data?.areaId?.nome, value:dados.data?.areaId?._id}]);
        setDigiPro([{label:dados.data?.localizacaoId?.nome, value:dados.data?.localizacaoId?._id}]);
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
              height: "880px",
              margin: "auto",
            }}
          >
            <div class="row">
              <div class="col-md-8">
                <div class="form-group" style={{ display: "inline-block" }}>
                  <div class="input-group">
                    <div class="custom-file"></div>
                  </div>
                </div>
              </div>

              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="tel"
                  name="conctacto"
                  value={digiTel}
                  onChange={e => setDigiTel(e.target.value)}
                  class="form-control"
                  placeholder="Telefone"
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>

              <div class="col-md-8" style={{ right: "0" }}>
              <label for="dataNascimento" class="form-label">
                  Data de Nascimento
                </label>
                <Input
                  type="date"
                  name="dataNascimento"
                  class="form-control"
                  value={digiData}
                  onChange={e => setDigiData(e.target.value)}
                  placeholder="Telefone"
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>

              <div class="col-md-8">
                <label for="sobremim" class="form-label">
                  Sobre Mim
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="sobreMin"
                  value={digiSobre}
                  onChange={e => setDigiSobre(e.target.value)}
                  id="sobre-mim"
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
                  value={digiRes}
                  onChange={e => setDigiRes(e.target.value)}
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>

              <div class="col-md-8">
                <label for="habilidades" class="form-label">
                  Habilidades
                </label>
                <TextArea
                  type="text"
                  class="form-control"
                  name="habilidades"
                  value={digiHab}
                  onChange={e => setDigiHab(e.target.value)}
                  id="habilidades"
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
                  value={digiPro}
                  onChange={e => setDigiPro(e)}
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
                  onChange={e => setDigiArea(e)}
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
