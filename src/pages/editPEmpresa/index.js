import React, {useRef} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import Select from '../../components/components/fields/Select';
import {toast} from "react-toastify";

export default function EditarEmpresa() {

  var ism = [{
    value: 'ahs',
    label: 'ísmelio'
  }]

  const schema = yup.object({
      nome: yup.string().required('O nome é obrigatorio'),
      website: yup.string(),
      telefone: yup.string().required('O telefone é obrigatorio'),
      email: yup.string().email('Deve ser um email valido').required('O email é obrigatorio'),
      senha: yup.string().min(8).required('O password é obrigatorio'),
      Csenha: yup.string()
      .oneOf([yup.ref('senha'), null], 'Password deve ser igual')
      .required('Comfirmar a palavra passe é obrigatorio'),
      pais: yup.string().required('O pais é obrigatorio'),
      provincia: yup.string().required('A provincia é obrigatorio'),
      sobremim: yup.string().required('A sobre-mim é obrigatorio'),
      responsabilidade: yup.string().required('responsabilidade é obrigatorio'),
      qualificacoesminimas: yup.string().required('qualificações minimas são obrigatorio'),
      qualificacoesperferidas: yup.string().required('qualificações perferidas são obrigatorio'),
      area: yup.string().required('A area é obrigatorio')
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
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef} style={{border: '1px solid #299be8', width: '410px', height: '1650px', margin: 'auto'}}>
          <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
            <div class="row">
              <div class="col-md-8">
                <div class="form-group" style={{ display: "inline-block" }}>
                  <label for="exampleInputFile">Imagem de Perfil</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <Input
                        type="file"
                        name="imagem"
                        class="custom-file-input"
                        id="exampleInputFile"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-md-8" style={{ right: "0" }}>
                <Input type="name" name="nome" class="form-control" placeholder="Nome" style={{width: '350px', margin: '10px auto'}}/>
              </div>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input type="tel" name="telefone" class="form-control" placeholder="Telefone" style={{width: '350px', margin: '10px auto'}}/>
              </div>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input type="text" name="website" class="form-control" placeholder="Website" style={{width: '350px', margin: '10px auto'}}/>
              </div>
              <div class="col-md-8">
                <Input type="email" name="email" class="form-control" placeholder="Email" style={{width: '350px', margin: '10px auto'}}/>
              </div>
              <div class="col-md-8">
                <Input
                  type="password"
                  class="form-control"
                  name="senha"
                  placeholder="Palavra-passe"
                  style={{width: '350px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <Input
                  type="password"
                  class="form-control"
                  name="Csenha"
                  placeholder="Confirme a palavra-passe"
                  style={{width: '350px', margin: '10px auto'}}
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
                  data={ism}
                  style={{width: '350px', margin: '10px auto'}}
                  />
              </div>

              <div class="col-md-8">
                <label for="provincia" class="form-label">
                  Provincia
                </label>
                <Select
                  class="form-control"
                  placeholder="Escolha a provincia"
                  name="provincia"
                  data={ism}
                  style={{width: '350px', margin: '10px auto'}}
                  />
              </div>
              <div class="col-md-8">
                <label for="sobre-mim" class="form-label">
                  Sobre
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="sobremim"
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
                <label for="qualificacoes-minimas" class="form-label">
                  Qualificacoes Minimas
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="qualificacoesminimas"
                  id="qualificacoes-minimas"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <label for="qualificacoes-perferidas" class="form-label">
                  Qualificacoes Perferidas
                </label>
                <Input
                  type="text"
                  class="form-control"
                  name="qualificacoesperferidas"
                  id="qualificacoes-perferidas"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <label for="area" class="form-label">
                  Area
                </label>
                <Select
                  class="form-control"
                  placeholder="Escolha a area"
                  name="area"
                  data={ism}
                  style={{width: '350px', margin: '10px auto'}}
                  />
              </div>
              <div class="col-md-8">
                <div class="col-md-8">
                  <button type="submit" class="btn btn-primary" style={{margin: "20px"}}>
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
