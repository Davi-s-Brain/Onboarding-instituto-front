import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserList, Login } from './components';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user-list/*' element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}
