/**
 * Pages
 */
import Perfil from "./pages/profile";
import Detalhes from "./pages/detalhes";
import Procurar from "./pages/procurar";
import EmpresaVer from "./pages/empresa - Cópia";
import EditarPerfil from "./pages/EditPerfil";
import Redefinir from "./pages/redifinpassword";
import Notifc from "./pages/notificacao";
import Layout from "./components/Layout";

// Profile

const routes = [
  {
    path: "/principal",
    element: Layout,
  },
  {
    path: "/editar-conta/:id",
    element: EditarPerfil,
  },

  {
    path: "/redefinir-senha",
    element: Redefinir,
  },
  {
    path: "/perfil/:id",
    element: Perfil,
  },
  {
    path: "/detalhes/:id",
    element: Detalhes,
  },
  {
    path: "/procurar",
    element: Procurar,
  },
  {
    path: "/notificacoes/:id",
    element: Notifc,
  },
  {
    path: "/perfil-empresa-ver/:id",
    element: EmpresaVer,
  },
];

export default routes;
