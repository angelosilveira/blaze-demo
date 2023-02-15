import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Double } from '@pages/Double';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Double />} />
      </Routes>
    </BrowserRouter>
  );
};
