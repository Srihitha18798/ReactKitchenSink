import React,{useState} from 'react'
import Child from './Child';

const Parent = () => {
    let fromParent = "Hello from Parent";
	const [fromChild, setFromChild] = useState("Waiting for value from Child");
    const updateFromChild = (value) => {
		setFromChild(value);
	  };
  return (
    <>
    <h2>Data Transfer Demo</h2>
		  <h3>In Parent</h3>
		  <p>Value in Parent: {fromParent}</p>
		  <p>Value received from Child: {fromChild}</p>
          <Child fromParent={fromParent} fromChild={updateFromChild} />

    </>
  )
}

export default Parent