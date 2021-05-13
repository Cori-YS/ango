import React, {useRef, useState, useEffect} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import Select from '../../components/components/fields/Select';
import TextArea from '../../components/components/fields/TextArea';
import {toast} from "react-toastify";
import Api from '../../services/api';
import { useAuth} from '../../auth'
import { useNavigate } from "react-router-dom";
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";

import { Link } from 'react-router-dom'


export default function EditarDetalhes() {
  const navigate = useNavigate();
  const { getUser} = useAuth()
  const [setor, setSetor]=useState([])
  const [user, setUser] = useState({});
  const tipo = [{label: 'Estágio', value: '1'}, {label: 'Integral', value: '2'}];

  const schema = yup.object({
    nome: yup.string().required('O nome é obrigatorio'),
    qualificacoes: yup.string().required('qualificações são obrigatorio'),
    overview: yup.string().required('sobre visão é obrigatorio'),
    responsabilidade: yup.string().required('responsabilidade é obrigatorio'),
    beneficios: yup.string().required('A beneficios é obrigatorio'),  
    tipoVaga: yup.string().required('Selecione o tipo de vaga'),
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
   data.utilizadorId=user.id;
      const response = await Api.post('/criar-vaga', {data})

      if(response.data.sucesso) {
        toast.success('vaga cadastrada com sucesso')
        return navigate(`/principal-empresa`);
      }
      
    
     }
     catch (err) {
   
      toast.error('houve um erro ao cadastrar')
     }
   }
   const formRef = useRef(null);

useEffect(()=>{   function receber(){
     Api.get('/trabalho').then((data)=>{
  console.log(data, "ismelio")
 
     var aux= data.data.setor.map((e)=>(
  
      {
        label:e.nome,
        value: e._id
      }
     )
     
     )
      setSetor(aux)
    }).catch((e) => {
      console.log(e)
    }) 
     }
     receber()
}, [])
 
useEffect(() => {
  
  
  setUser(getUser());
  }, [getUser]);

  return (
    <>
    
    <DesktopHeader className="mt-8" />
    <MobileHeader />
    
      <section class="login-wrapper">
        <div class="container1">
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef} style={{border: '1px solid #299be8', width: '410px', height: '1200px'}}>
            <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
            <div class="row">
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
                  Visão Sobre 
                </label>
                <TextArea
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
                <TextArea
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
                <TextArea
                  type="text"
                  class="form-control"
                  name="responsabilidade"
                  id="responsabilidade"
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              <div class="col-md-8">
                <label for="beneficios" class="form-label">
                  Beneficios
                </label>
                <TextArea
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
              <div class="col-md-8" style={{margin: '20px auto'}}>
                <Select
                  class="form-control"
                  placeholder="Escolha o Setor"
                  name="setor"
                  data={setor}
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
