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

export default Square