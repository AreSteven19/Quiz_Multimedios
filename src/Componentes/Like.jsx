import React, { useState } from 'react';
import estilo from './estilo.css';
function Contador() {
  const [likes, setLikes] = useState(0);

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };

  const disminuirLikes = () => {
    
      setLikes(likes - 1);
    
  };

  return (
    <div>
      <h1>Cantidad de likes: {likes}</h1>
      <button onClick={aumentarLikes}>Aumentar</button>
      <button onClick={disminuirLikes}>Disminuir</button>
    </div>
  );
}

export default Contador;
