import React, { useRef } from "react";
import * as yup from "yup";
import { Form } from "@unform/web";
import Input from "../../components/components/fields/Input";
import { toast } from "react-toastify";
//import avatar from "../../../profile.svg";
//import bg from "../../assets/bg.svg";
//import wave from "../../assets/wave.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Constants from "../../components/general/constants";

function Login() {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um email valido")
      .required("O email é obrigatorio"),
    senha: yup.string().min(8).required("O password é obrigatorio"),
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
      const response = await api.post("/sessao", { data });
      console.log(response, "ismelio");
      // If successful:
      if (response.data.user.sucesso) {
        // Get token
        const { id, token, ...use } = response.data.user;
        use.id = id;
        if (token) {
          // Save cookie 'remember me'

          // Save the user token in local storage
          localStorage.setItem(Constants.USER_TOKEN, token);

          // This user is Person?
          if (use != null && id) {
            // Save the user data in local storage
            localStorage.setItem(Constants.USER_DATA, JSON.stringify(use));

            // Navigate to the home.
            if (use.categoria == "candidato") navigate(`/principal`);

            if (use.categoria == "empresa") navigate(`/principal-empresa`);
          } else if (id) {
            // Navigate to the first page.
            navigate(`/primeiro-uso/${id}`);
          }
        } else {
          const { message } = response.data.data.login;
          if (message === "invalid-username-or-password") {
            toast.error("E-email ou senha inválida", {
              position: "top-center",
            });
          }
        }
      } else {
        toast.error("Falha ao iniciar sessão", {
          position: "top-center",
        });
      }
    } catch (exception) {
      toast.error("Houve um erro ao iniciar a sessão. Tente novamente", {
        position: "top-center",
      });
      console.log(exception, "erro");
    }
  }
  const formRef = useRef(null);

  return (
    <>
      <section class="login-wrapper">
        <div class="container1">
          <Form
            class="container"
            schema={schema}
            onSubmit={handleSubmit}
            ref={formRef}
            style={{ width: "410px" }}
          >
            <img class="img-responsive" alt="logo" src="img/logo-azul.png" />
            <Input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              style={{ width: "350px", margin: "10px auto" }}
            />
            <Input
              type="password"
              class="form-control"
              placeholder="Palavra-passe"
              name="senha"
              style={{ width: "350px", margin: "10px auto" }}
            />
            <label>
              <Link to="/recuperar-senha">Esqueceu à Palavra-passe?</Link>
            </label>
            <button
              type="submit"
              class="btn btn-primary"
              style={{ margin: "20px" }}
            >
              Entrar
            </button>
            <p>
              Não tem conta <Link to="/criar-conta">Criar uma conta</Link>
            </p>
          </Form>
        </div>
      </section>
    </>
  );
}

export default Login;
