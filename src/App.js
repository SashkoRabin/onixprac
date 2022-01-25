import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APIFetching from './pages/APIFetching/APIFetching';
import Bio from './pages/Bio/Bio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bio" element={<Bio />} />
        <Route path="/api" element={<APIFetching />} />
        <Route path="*" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
