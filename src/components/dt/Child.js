import React from "react";

const Child = ({ fromParent, fromChild }) => {
	  
    const sendValueToParent = () => {
      fromChild("Hello from Child");
    };

    return (
      <>
        <h3>In Child</h3>
        <p>Value received from Parent: {fromParent}</p>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={sendValueToParent}
        >
          Send Value to Parent
        </button>
      </>
    );
  };

  export default Child;

