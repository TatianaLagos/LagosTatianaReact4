import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer title="¡Bienvenido a la Tienda! Aquí encontrarás los accesorios que necesitas." />
    </div>
  );
};

export default App;

