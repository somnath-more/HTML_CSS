import React from 'react'

function ChildComponent(props: any) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('Child')}>Click Me!!</button>
    </div>
  )
}

export default ChildComponent