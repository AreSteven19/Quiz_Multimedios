import React from 'react';
import Contador from './Componentes/Like';
import Nombreapp from './Componentes/Nombre'
import Modal from './Componentes/Modal'

function App() {
  return (
    <div>
       <Contador/>
       <br></br>
       <Nombreapp/>
       <br></br>
      <Modal/>
    </div>
  );
}

export default App;
