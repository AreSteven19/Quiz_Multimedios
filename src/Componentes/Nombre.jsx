import React, { useState } from 'react';
import estilo from './estilo.css';
function Nombreapp() {
  const [nombre, setNombre] = useState('');

  const Cambiarnombre = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h1>hola:{nombre ? nombre : 'No definido'}</h1>
      <input type="text" value={nombre} onChange={Cambiarnombre} />
    </div>
  );
}

export default Nombreapp;
