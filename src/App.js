import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/profile";
import Register from "./pages/cadastro";
import RegisterE from "./pages/cadastroe";
import Login from "./pages/login";
import Detalhes from "./pages/detalhes";
import Procurar from "./pages/procurar";
import Empresa from "./pages/empresa";
import EditarPerfil from "./pages/EditPerfil";
import EditarDetalhes from "./pages/EditDetalhes";
import EditarPEmpresa from "./pages/editPEmpresa";
import Fpassword from "./pages/Fpassword";
import Forget from "./pages/redifinpassword";
import Notifc from "./pages/notificacao";
import Layout from "./components/Layout";
import Layoute from "./components/layoutE";
import CadastroEmpresa from './pages/cadastroe'

import Routes from "./routes";
function App() {

  
  return (
    <>
    
      <Router>
        <Routes />
      </Router>
      

      
    </>
  );
}

export default App;
