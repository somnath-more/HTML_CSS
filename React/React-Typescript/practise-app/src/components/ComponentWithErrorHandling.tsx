import React, { useState } from 'react';

type Props = {
  value: string;
};

const ComponentWithErrorHandling: React.FC<Props> = ({ value }) => {
  const [error, setError] = useState<string>('');

  const handleClick = (): void => {
    if (value === '') {
      setError('Value cannot be empty');
    } else {
      console.log('Value:', value);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setError('');
    // Update the value in the parent component or somewhere else as needed
    console.log('New value:', event.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default ComponentWithErrorHandling;
//Component mounting