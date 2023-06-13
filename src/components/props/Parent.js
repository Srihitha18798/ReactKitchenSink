import React from "react";
import Child from "./Child";

export default class Parent extends React.Component{
    render(){
        let valueToPass="Hello from parent";
        return(
            <>
            <h2>Props Demo</h2>
            <h2>In parent</h2>
            <h1>Value in parent:{valueToPass}</h1>
            <Child valuePassed={valueToPass}/>
            </>
        )
    }
}