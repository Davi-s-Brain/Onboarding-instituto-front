import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components';
import { Teste } from './teste';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/teste/*' element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}
