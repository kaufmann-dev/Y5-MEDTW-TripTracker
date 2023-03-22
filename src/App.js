import React from 'react';

import AddTripForm from './AddTripForm';
import TripOverview from './TripOverview';
import StatisticsPage from './StatisticsPage';

import Layout from './Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TripOverview />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="add" element={<AddTripForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
