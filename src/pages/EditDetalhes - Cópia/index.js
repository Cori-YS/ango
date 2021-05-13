import React, {useRef, useState, useEffect} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import Select from '../../components/components/fields/Select';
import TextArea from '../../components/components/fields/TextArea';
import { Link } from 'react-router-dom'
import {toast} from "react-toastify";
import { useAuth} from '../../auth'
import Api from '../../services/api';
import DesktopHeader from "../../components/DesktopHeaderImgE";
import MobileHeader from "../../components/MobileHeaderImgE";
import { useParams} from 'react-router-dom'

export default function EditarDetalhes() {
  const { id } = useParams();
  const { getUser} = useAuth()
  const [setor, setSetor]=useState([])
  const [user, setUser] = useState({});
  const [vagas, setVagas]= useState({});
  const tipo = [{label: 'Estágio', value: '1'}, {label: 'Integral', value: '2'}];
  const [digiNome, setDigitNome]= useState()
  const [digitipoVaga, setDigittipoVaga]= useState([])
  const [digiQualific, setDigitQualific]= useState()
  const [digirequiremento, setDigitrequiremento]= useState()
  const [digiBeneficio, setDigitBeneficio]= useState()
  const [digiSetor, setDigitSetor]= useState([])
  const [digiresponsabilidade, setDigitresponsabilidade]= useState()
  const [digioverview, setDigitoverview]= useState()
  const schema = yup.object({
    nome: yup.string().required('O nome é obrigatorio'),
    tipoVaga: yup.string().required('Selecione o tipo de vaga'),
    qualificacoes: yup.string().required('qualificações são obrigatorio'),
    responsabilidade: yup.string().required('responsabilidade é obrigatorio'),
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
       data.id=id;
      const response = await Api.post('/vaga-actualizar', {data})

      if(response.data.sucesso) return toast.success('vaga actualizada com sucesso')
    
     }
     catch (err) {
   
   console.log(err)
     }
   }
   const formRef = useRef(null);

   useEffect(()=>{   
     function receber(){

    Api.get(`/vagas/${id}`).then((data)=>{
      console.log(data.data.Listagem, "Raul Mau")
       setVagas(data.data.Listagem)
       setDigitNome(data.data.Listagem?.nome)
       setDigitQualific(data.data.Listagem?.qualificacoes)
       setDigitrequiremento(data.data.Listagem?.requerimentos)
       setDigitresponsabilidade(data.data.Listagem?.responsabilidade)
       setDigitBeneficio(data.data.Listagem?.beneficios)
       setDigitSetor([{label:data.data.Listagem?.setor?.nome, value:data.data.Listagem?.setor?._id}])
       setDigittipoVaga([{label:(data.data.Listagem?.tipoVaga=="1"?"Estagio":"Integral"), value:data.data.Listagem?.tipoVaga}])
       setDigitoverview(vagas?.overview)
        }).catch((e) => {
          console.log(e)
        }) 


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
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef} style={{border: '1px solid #299be8', width: '410px', height: '900px'}}>
          
            <div class="row" style={{margin: '50px auto'}}>
              <div class="col-md-8" style={{ right: "0" }}>
                <Input
                  type="name"
                  name="nome"
                  value={digiNome}
                  onChange={e => setDigitNome(e.target.value)}
                  class="form-control"
                  placeholder="Nome da vaga"
                  style={{width: '350px', margin: '10px auto'}}
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
                  value={digiQualific}
                  onChange={e => setDigitQualific(e.target.value)}
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
                  value={digiresponsabilidade}
                  onChange={e => setDigitresponsabilidade(e.target.value)}
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
                  value={digiBeneficio}
                  onChange={e => setDigitBeneficio(e.target.value)}
                  placeholder="..."
                  style={{width: '350px', height: '100px', margin: '10px auto'}}
                />
              </div>
              

              <div class="col-md-8">
                <Select
                  class="form-control"
                  placeholder="Escolha o Tipo"
                  name="tipoVaga"
                 value={digitipoVaga}
                 onChange={e => setDigittipoVaga(e)}
                  data={tipo}
                  />
              </div>
              <div class="col-md-8"  style={{margin: '20px auto'}}>
                <Select
                  class="form-control"
                  placeholder="Escolha o Setor"
                  name="setor"
                 value={digiSetor}
                 onChange={e => setDigitSetor(e)}
                  data={setor}
                  />
              </div>

              <div class="col-md-8">
                <div class="col-md-8">
                  <button type="submit" class="btn btn-primary" style={{margin: "20px"}}>
                    Actualizar
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
