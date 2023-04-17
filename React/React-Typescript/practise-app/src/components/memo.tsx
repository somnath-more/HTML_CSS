import React, { memo } from 'react';

interface Props {
  name: string;
}

const MyComponent = memo(({ name }: Props) => {
  console.log('Rendering MyComponent');
  return <div>Hello, {name}!</div>;
});

export default MyComponent;
