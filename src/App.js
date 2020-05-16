import React from 'react';

// Importar script login.js como uma Classe
import Login from './views/login'

import 'bootswatch/dist/flatly/bootstrap.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App;
