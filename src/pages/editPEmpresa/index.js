import React, { useRef, useState, useEffect } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";
import Input from "../../components/components/fields/Input";
import Select from "../../components/components/fields/Select";
import TextArea from "../../components/components/fields/TextArea";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Api from "../../services/api";
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";
export default function EditarEmpresa() {
  const { id } = useParams();
  const [provincia, setProvincia] = useState([]);
  const [pais, setPais] = useState([]);
  const [area, setArea] = useState([]);
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
    alert()
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
      }
    } catch (err) {}
  }
  const formRef = useRef(null);
  useEffect(() => {
    function receber() {
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

    receber();
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
              height: "1100px",
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
                  class="form-control"
                  placeholder="Telefone"
                  style={{ width: "350px", margin: "10px auto" }}
                />
              </div>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="text"
                  name="site"
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
                  placeholder="..."
                  style={{
                    width: "350px",
                    height: "100px",
                    margin: "10px auto",
                  }}
                />
              </div>
              <div class="col-md-8">
                <label for="pais" class="form-label">
                  Pais
                </label>
                <Select
                  class="form-control"
                  placeholder="Escolha o pais"
                  name="pais"
                  data={pais}
                  style={{ width: "350px", margin: "10px auto" }}
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
