import React ,{useState}from 'react'

function HookCounterTwo() {
    const initialvalue=0
   const [count ,setCount]= useState(initialvalue)
  
   const increamentFive=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount=>prevCount+1)//5 vela add hoil
    }
   }
  
   return (
    <div>
        Count:{count}
    <button onClick={()=>setCount(initialvalue)}>Reset </button>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={increamentFive}>Increament 5</button>
    </div>
  )
}

export default HookCounterTwo