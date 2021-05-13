import React, {useRef, useEffect, useState} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import Select from '../../components/components/fields/Select';
import {toast} from "react-toastify";
import Api from '../../services/api';
import { useNavigate } from "react-router-dom";
export default function Cadastro() {
  const navigate = useNavigate();
const [sexo, setSexo]= useState([{label:"Masculino", value:"Masculino"},
{label:"Feminino", value:"Feminino"}]);
 const [provincia, setProvincia] = useState([]);
 const [pais, setPais]= useState([]);

    const schema = yup.object({
      nome: yup.string().required('O nome é obrigatorio'),
      email: yup.string().email('Deve ser um email valido').required('O email é obrigatorio'),
      senha: yup.string().min(8).required('O password é obrigatorio'),
      Csenha: yup.string()
      .oneOf([yup.ref('senha'), null], 'Password deve ser igual')
      .required('Comfirmar a palavra passe é obrigatorio'),
      nascimento: yup.date().required('A data de nascimento é obrigatorio'),
      pais: yup.string().required('O pais é obrigatorio'),
      provincia: yup.string().required('A provincia é obrigatorio'),
      sexo: yup.string().required('O sexo é obrigatorio')
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
         data.owner="candidato";

           const responsivo = await Api.post('utilizador', {data});
          if(responsivo.data.exist){
            return toast.error('Este email nao esta disponivel')
          }
          if(responsivo.data.sucesso){

            toast.success('A sua conta foi cadastrada com sucesso, pode logar');
            return navigate(`/entrar`);
        }
     
       }
       catch (err) {
     
     
       }
     }
     const formRef = useRef(null);
   
useEffect(()=>{
   function receber(){

    Api.get('localizacao').then((e)=>{
     var aux= e.data.provincia.map((e)=>(
        {
          label:e.nome,
          value:e._id
        }
      ));
      var aux1= e.data.pais.map((e)=>(
        {
          label:e.nome,
          value:e._id
        }
      ));
      setPais(aux1)
      setProvincia(aux)
      
  console.log( aux,'raul mau');
    }).catch(e =>{
      console.log(e, 'err')
    })
    
    
}

 receber()

}, [])

  return (
    <>
          <section class="login-wrapper">
          <div class="container1">
            <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef} style={{border: '1px solid #299be8', width: '410px', height: '1000px'}}>
              <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
              <div class="row">
                <div class="col-md-12">
                  <Input
                    type="text"
                    class="form-control"
                    placeholder=" Nome"
                    name="nome"
                    style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <Input type="email" 
                    class="form-control" 
                    placeholder="Email" 
                    name="email"
                    style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <Input
                    type="password"
                    class="form-control"
                    placeholder="Palavra-passe"
                    name="senha"
                    style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <Input
                    type="password"
                    class="form-control"
                    placeholder="Confirme a palavra-passe"
                    name="Csenha"
                    style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <label for="dtNascimento" class="form-label">
                    Data de Nascimento
                  </label>
                  <Input
                    type="date"
                    class="form-control"
                    name="nascimento"
                    id="dtNascimento"
                    style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <label for="pais" class="form-label">
                    Pais
                  </label>
                  <Select
                  class="form-control"
                  placeholder="Escolha o pais"
                  name="pais"
                  data={pais}
                  style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
  
                <div class="col-md-12">
                  <label for="provincia" class="form-label">
                    Provincia
                  </label>
                  <Select
                  class="form-control"
                  placeholder="Escolha a provincia"
                  name="provincia"
                  data={provincia}
                  style={{width: '350px', margin: '10px auto'}}
                  />
                </div>
                <div class="col-md-12">
                  <label for="sexo" class="form-label">
                    Sexo
                  </label>
                  <Select
                  class="form-control"
                  placeholder="Sexo"
                  name="sexo"
                  data={sexo}
                  style={{width: '350px', margin: '10px auto'}}
                  />
  
                </div>
                
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary" style={{margin: "20px"}}>
                      Criar Conta
                    </button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      
    </>
  );
}
