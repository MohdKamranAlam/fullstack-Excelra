import React, { useState } from 'react';
import Matrix from './component/Matrix';

const SquareMatrix = () => {
  const [n, setN] = useState('');
  const [matrix, setMatrix] = useState([

  ]);

  const handleNChange = (e) => {
    const newN = parseInt(e.target.value, 10); //Converts the string value of target element to a base-10 integer
    if (!isNaN(newN)) {
      setN(newN);
      setMatrix(Array.from({ length: newN }, (_, i) => 
        Array.from({ length: newN }, (_, j) => i * n + j + 1)
      ));
    }
  };

  const handleChange = (i, j, newValue) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = newValue;
    setMatrix(newMatrix);
  };

  return (
    <div>
      <h2>Square box Matrix Based on input</h2>
      <input
        type="text"
        value={n}
        onChange={handleNChange}
        style={{ marginBottom: '10px' }}
        placeholder='Only numeric value'
      />
      <Matrix matrix={matrix} onChange={handleChange} />
    </div>
  );
};
export default SquareMatrix