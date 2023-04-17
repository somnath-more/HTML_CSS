import React from 'react';
import ReactDOM from 'react-dom';

function One() {
  const handleClick = () => {
    const div = document.createElement('div');
    div.textContent = 'New element added!';
    document.body.appendChild(div);
  };

  return (
    <div>
      <button onClick={handleClick}>Add element</button>
    </div>
  );
}
export default One