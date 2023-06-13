import React, { useState } from 'react'

const StateDemo = () => {

    const [counter,setCounter]=useState(0);

    const decrement=()=>{
        setCounter(counter-1);
    }

  return (
    <>
    <h3>Counter with hooks</h3>
    <p>
        <span className="ml-1">Counter: {counter}</span>
    </p>
    <button className="btn btn-sm btn-outline-info m-2" onClick={decrement}>Decrement</button>
    <button className="btn btn-sm btn-outline-info m-2" onClick={()=>{setCounter(counter+1)}}>Increment</button>

    </>
  )
}

export default StateDemo