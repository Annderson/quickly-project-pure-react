import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/presentation/pages/Home';
import Login from '@/presentation/pages/Login';

import routesName from './routesName';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routesName.Home} element={<Home />} />
        <Route path={routesName.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
