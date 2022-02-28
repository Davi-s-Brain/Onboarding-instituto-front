import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from "./components";
import { Teste } from "./teste"

export function Destiny() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/teste' element={<Teste />}/>
      </Routes>
    </BrowserRouter>
  )
}