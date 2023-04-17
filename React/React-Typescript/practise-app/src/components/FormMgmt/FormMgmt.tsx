import { useState } from "react";

function Form() {
    const [value, setValue] = useState('');
  
    function handleChange(e:any) {
      setValue(e.target.value);
    }
  
    return (
      <form>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
      </form>
    );
  }
  export default Form