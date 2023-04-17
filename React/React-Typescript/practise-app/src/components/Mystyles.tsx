import React from 'react'
import './Mystyle.css'
function Mystyles(props:any) {
    let className = props.primary?'primary':''
  return (
    <div >
        <h1 className={`${className} font-xl`}>Mystyles</h1>
    </div>
  )
}

export default Mystyles