import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Formulaire from "./pages/Formulaire";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/formulaire' element={<Formulaire />} />
        <Route exact path='/' element={<HomePage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;

