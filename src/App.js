import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MenuContainer from './components/MenuContainer/MenuContainer.component';
import Navbar from './components/Navbar/Navbar.component';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <MenuContainer />
      
    </div>
  );
}

export default App;
