import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Formulaire from "./pages/Formulaire";
import About from "./pages/About";
import Inscription from "./pages/Inscription";
import Users from "./pages/Users";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/formulaire' element={<Formulaire />} />
        <Route exact path='/inscription' element={<Inscription />} />
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

