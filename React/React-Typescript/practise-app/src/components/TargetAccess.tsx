import React, { useRef } from 'react';
function TargetAccess() {
  const inputRef = useRef<HTMLInputElement>(null);//We can store single value

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef.current?.value);//Imp
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />{ /*this is important*/}
      <button type="submit">Submit</button>
    </form>
  );
}
export default TargetAccess
