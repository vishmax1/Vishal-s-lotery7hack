import React from 'react';
import LiveResult from './components/LiveResult';
import Prediction from './components/Prediction';
import AccuracyBox from './components/AccuracyBox';
import HistoryTable from './components/HistoryTable';

function App() {
  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Wingo 1 Min Prediction</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <LiveResult />
        <AccuracyBox />
      </div>
      <Prediction />
      <HistoryTable />
    </div>
  );
}

export default App;