import React from 'react';

// importar rotas ao inves dos componentes
import Rotas from './rotas'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Rotas />
      </div>
    )
  }
}

export default App
