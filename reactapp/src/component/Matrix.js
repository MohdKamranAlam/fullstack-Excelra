import Square from "./Square";

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

export default Matrix