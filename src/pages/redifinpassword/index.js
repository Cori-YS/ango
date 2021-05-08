import React, {useRef} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import {toast} from "react-toastify";

export default function Redifinipassword() {

  const schema = yup.object({
    senha: yup.string().min(8, 'Deve ter no minimo 8 characteres').required('O password é obrigatorio'),
    Csenha: yup.string()
    .oneOf([yup.ref('senha'), null], 'Password deve ser igual')
    .required('Comfirmar a palavra passe é obrigatorio')
  })

  async function handleSubmit (data, {reset}){
    try{
     console.log(data);
     toast.success('A sua');
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
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef}>
            <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <Input
                  type="password"
                  class="form-control"
                  name="senha"
                  placeholder="Nova Palavra-passe"
                />
              </div>
              <div class="col-md-6 col-sm-6" style={{ right: "0" }}>
                <Input
                  type="password"
                  class="form-control"
                  name="Csenha"
                  placeholder="Comfirme a nova palavra-passe"
                />
              </div>
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary"  style={{margin: "20px"}}>
                  Alterar a Palavra-passe
                </button>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
