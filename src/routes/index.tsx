import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from '@pages/Dashboard';
import { Wrapper } from '@components/Wrapper';
import { Header } from '@components/Header';
import { CreateProposal } from '@pages/Proposta/Create';
import { Proposals } from '@pages/Proposta';
import { EditProposal } from '@pages/Proposta/Edit';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Proposals />} />
          <Route path="/reports" element={<Dashboard />} />
          <Route path="/new-proposal" element={<CreateProposal />} />
          <Route path="/proposal/:id" element={<EditProposal />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
