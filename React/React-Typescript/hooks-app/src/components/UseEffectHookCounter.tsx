import React,{useState,useEffect} from 'react'

function UseEffectHookCounter() {
   const[count,setCount]=useState(0)
   useEffect(()=>{        //beuty of useeefect within that it will happen
    document.title=`You clicked ${count} times`
   })
    return (
    <div>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectHookCounter