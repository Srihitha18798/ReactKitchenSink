import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  const handleCLickWIthParams=(params)=>{
    alert(`Button clicked by passing ${params}`)
  }

  return (
    <>
      <h2>Event handling Demo</h2>
      <button
        type="button"
        className="m-1 btn btn-outline-secondary"
        onClick={handleClick}
      >
        CLick me
      </button>

      <button
        type="button"
        className="m-1 btn btn-outline-secondary"
        onClick={()=>{handleCLickWIthParams("Hello")}}
      >
        CLick me(with params)
      </button>
    </>
  );
};

export default Events;
