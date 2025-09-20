import React from 'react';
import NavBar from './Navbar';
import ItemListContainer from './ItemListconteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola mundo" />
    </div>
  );
}

export default App;
