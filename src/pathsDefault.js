/**
 * Pages
 */
import Home from "./pages/Home";
import Perfil from "./pages/profile";
import PerfilVer from "./pages/profile - Cópia";
import Register from "./pages/cadastro";
import Login from "./pages/login";
import Detalhes from "./pages/detalhes";
import DetalhesE from "./pages/detalhes - Cópia";
import EditarDetalhes from "./pages/EditDetalhes";
import Editar_Detalhes from "./pages/EditDetalhes - Cópia";
import Procurar from "./pages/procurar";
import Empresa from "./pages/empresa";
import EmpresaVer from "./pages/empresa - Cópia";
import EditarPerfil from "./pages/EditPerfil";
import Forget from "./pages/Fpassword";
import Redefinir from "./pages/redifinpassword";
import listaUser from "./pages/listaUser";
import Notifc from "./pages/notificacao";
import Layout from "./components/Layout";
import CadastroEmpresa from "./pages/cadastroe";
import EditarPerfilEmpresa from "./pages/editPEmpresa";

// Auth
import Auth from "./pages/auth";

import Main from "./pages";

// Home
import Layoute from "./components/layoutE";

// Profile

const routes = [
  {
    path: "/",
    element: Home,
    isPrivate: false,
  },

  {
    nested: true,
    path: "/entrar",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Login,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/criar-conta",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Register,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/cadastro-empresa",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: CadastroEmpresa,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/recuperar-senha",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Forget,
        isPrivate: false,
      },
    ],
  },
];

export default routes;
