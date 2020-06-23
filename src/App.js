import React from 'react';

// Importar script login.js como uma Classe
import Login from './views/login'
import CadastroUsuario from './views/cadastroUsuario'

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Login /> */}
        <CadastroUsuario />
      </div>
    )
  }
}

export default App;
