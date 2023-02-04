import React, { useState } from 'react';

const Square = ({ value, onChange }) => (
  <input
    type="text"
    className="square"
    style={{
      width: '50px',
      height: '50px',
      textAlign: 'center',
      backgroundColor: 'black'
    }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

const Matrix = ({ matrix, onChange }) => (
  <div className="matrix">
    {matrix.map((row, i) => (
      <div key={i} className="row">
        {row.map((value, j) => (
          <Square
            key={j}
            value={value}
            onChange={(newValue) => onChange(i, j, newValue)}
          />
        ))}
      </div>
    ))}
  </div>
);

const SquareMatrix = () => {
  const [n, setN] = useState('');
  const [matrix, setMatrix] = useState([

  ]);

  const handleNChange = (e) => {
    const newN = parseInt(e.target.value, 10);
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
      <input
        type="text"
        value={n}
        onChange={handleNChange}
        style={{ marginBottom: '10px' }}
      />
      <Matrix matrix={matrix} onChange={handleChange} />
    </div>
  );
};
export default SquareMatrix