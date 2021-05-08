import React, {useRef} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import Select from '../../components/components/fields/Select';
import {toast} from "react-toastify";

export default function EditarDetalhes() {

  const tipo = [{label: 'Estágio', value: '1'}, {label: 'Integral', value: '2'}];

  const schema = yup.object({
    nome: yup.string().required('O nome é obrigatorio'),
    tipoVaga: yup.string().required('Selecione o tipo de vaga'),
    qualificacoes: yup.string().required('qualificações são obrigatorio'),
    responsabilidade: yup.string().required('responsabilidade é obrigatorio'),
    requerimentos: yup.string().required('requerimentos são obrigatorio'),
    beneficios: yup.string().required('A beneficios é obrigatorio'),
    setor: yup.string().required('Selecione o setor da vaga'),
  })

  async function handleSubmit (data, {reset}){
    try{
     await schema.validate(data, {
       abortEarly: false,
     });
     reset();
    }catch (err){
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
   
     }
     catch (err) {
   
   
     }
   }
   const formRef = useRef(null);

  return (
    <>
      <section class="login-wrapper">
        <div class="container1">
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef} style={{border: '1px solid #299be8', width: '410px', height: '1200px'}}>
          
            <div class="row" style={{margin: '50px auto'}}>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="name"
                  name="nome"
                  class="form-control"
                  placeholder="Nome da vaga"
                  style={{width: '350px', margin: '10px auto'}}
                />
              </div>

              <div class="col-md-8">
                <label for="Overview" class="form-label"  style={{margin: '20px auto'}}>
                  Sobre Visão
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="overview"
                  id="Overview"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>

              <div class="col-md-8">
                <label for="qualificacoes" class="form-label">
                  Qualificações
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="qualificacoes"
                  id="qualificacoes"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>

              <div class="col-md-8">
                <label for="responsabilidade" class="form-label">
                  Responsabilidades
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="responsabilidade"
                  id="responsabilidade"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <label for="requerimentos" class="form-label">
                  Requerimentos
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="requerimentos"
                  id="requerimentos"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <label for="beneficios" class="form-label">
                  Beneficios
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="beneficios"
                  id="beneficios"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              

              <div class="col-md-8">
                <Select
                  class="form-control"
                  placeholder="Escolha o Tipo"
                  name="tipoVaga"
                  data={tipo}
                  />
              </div>
              <div class="col-md-8"  style={{margin: '20px auto'}}>
                <Select
                  class="form-control"
                  placeholder="Escolha o Setor"
                  name="setor"
                  data={[]}
                  />
              </div>

              <div class="col-md-8">
                <div class="col-md-8">
                  <button type="submit" class="btn btn-primary" style={{margin: "20px"}}>
                    Postar
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
