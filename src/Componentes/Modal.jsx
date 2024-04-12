import React, { useState } from 'react';
import estilo from './estilo.css';
function Modal() {
  const [sepuedever, Setver] = useState(true);

  const mostrardatos = () => {
    Setver(!sepuedever);
  };

  return (
    <div>
      
      {sepuedever && <div  id='modelo' style={{width: '400px', height: '400px', }}>Bienvenidos al curso de multimedios</div>

      }
     <button onClick={mostrardatos}>cerrar</button>
     
    </div>
  );
}

export default Modal;
