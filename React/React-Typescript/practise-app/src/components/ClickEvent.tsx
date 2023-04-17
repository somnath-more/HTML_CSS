import React from 'react'

function Functionclick() {
    function clickhandler(){
        console.log("Event fired ");
    }
  return (

    <div>
        <button onClick={clickhandler}>Click me!!</button>
    </div>
  )
}

export default Functionclick
/*clickhandler this is imp*/