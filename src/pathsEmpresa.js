/**
 * Pages
 */
import Home from "./pages/Home";
import PerfilVer from "./pages/profile - Cópia";
import DetalhesE from "./pages/detalhes";
import EditarDetalhes from "./pages/EditDetalhes";
import Editar_Detalhes from "./pages/EditDetalhes - Cópia";
import Procurar from "./pages/procurar";
import Empresa from "./pages/empresa";
import Redefinir from "./pages/redifinpassword";
import listaUser from "./pages/listaUser";
import Notifc from "./pages/notificacao";
import EditarPerfilEmpresa from './pages/editPEmpresa'

// Auth
import Auth from "./pages/auth";

import Main from "./pages";

// Home
import Layoute from "./components/layoutE";

// Profile

const routes = [
  
  {
    path: "/editar-conta-empresa/:id",
    element: EditarPerfilEmpresa 
  },
  {
    path: "/cadastrar-vaga",
    element: EditarDetalhes 
  },
  {
    path: "/editar-vaga/:id",
    element: Editar_Detalhes 
  },
  
  {
    path: "/redefinir-senha",
    element: Redefinir
  },
  {
    path: "/perfil-empresa/:id",
    element: Empresa
  },
  
  {
    path: "/detalhes-vaga/:id",
    element: DetalhesE
  },
  {
    path: "/procurar",
    element: Procurar
  },
  {
    path: "/lista-candidatos",
    element: listaUser
  },
  {
    path: "/principal-empresa",
    element: Layoute
  },
  {
    path: "/notificacoes/:id",
    element: Notifc
  }
  ,
  {
    path: "/perfil-ver/:id",
    element: PerfilVer
  }
  
];

export default routes;
