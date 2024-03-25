import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import  NavBar from './components/NavBar'
function App() {
  
  return (
    <BrowserRouter>
        <NavBar /> {/* - будет отображатся на каждой странице*/}
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
