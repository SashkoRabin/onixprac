import React from 'react';
import { Route, Routes } from 'react-router-dom';
import APIFetching from '../../pages/APIFetching/APIFetching';
import Bio from '../../pages/Bio/Bio';

const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/bio" element={<Bio />} />
      <Route path="/api" element={<APIFetching />} />
      <Route path="*" element={<Bio />} />
    </Routes>
  );
};

export default SiteRouter;
