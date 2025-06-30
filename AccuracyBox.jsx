import React from 'react';

function AccuracyBox() {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Prediction Accuracy</h2>
      <p>Correct: 72</p>
      <p>Wrong: 28</p>
      <p>Accuracy: 72%</p>
    </div>
  );
}

export default AccuracyBox;