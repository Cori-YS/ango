import React, {useRef} from "react";
import * as yup from 'yup';
import { Form} from '@unform/web';
import  Input  from '../../components/components/fields/Input';
import {toast} from "react-toastify";

export default function Password() {

  const schema = yup.object({
    email: yup.string().email('Deve ser um email valido').required('O email é obrigatorio'),
    codigo: yup.string().max(6)
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
          <Form class="container" schema={schema} onSubmit={handleSubmit} ref={formRef}>
            <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
            <div class="row">
              <div class="col-md-12">
                <Input
                  type="email"
                  name="email"
                  class="form-control disabled"
                  placeholder="user@email.com"
                />
              </div>
              <div class="col-md-12">
                <label for="codigo">Codigo</label>
                <Input
                  type="number"
                  class="form-control"
                  name="codigo"
                  placeholder="XX-XX-XX"
                  id="codigo"
                />
              </div>
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary"  style={{margin: "20px"}}>
                  Enviar Codigo
                </button>
                <button type="submit" class="btn btn-primary"  style={{margin: "20px"}}>
                  Entrar Codigo
                </button>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
