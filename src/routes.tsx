import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Adduser, Login, UserDetail, UserList } from './components';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user-list/*' element={<UserList />} />
        <Route path='/add-user/*' element={<Adduser />} />
        <Route path='/user-details/:id' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
