import React from 'react';

function HistoryTable() {
  return (
    <div className="bg-white shadow p-4 rounded-xl mt-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-2">History (Last 200)</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Period</th>
            <th className="p-2">Number</th>
            <th className="p-2">Big/Small</th>
            <th className="p-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">20250630100010601</td>
            <td className="p-2">6</td>
            <td className="p-2">Big</td>
            <td className="p-2">Green</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;