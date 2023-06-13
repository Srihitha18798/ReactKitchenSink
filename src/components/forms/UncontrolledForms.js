import { useState, useRef } from "react";

	const UncontrolledForms = () => {
	  let username = useRef(); // direct reference to DOM node using useRef
	  const [success, setSuccess] = useState("");
	  const [error, setError] = useState("");

	  const handleSubmit = (event) => {
		// this must be done to stop page refresh
		event.preventDefault();

		let name = username.current.value; // access value of input field with reference.current.value

		if (name === "") {
		  setError("Pls enter name");
		  setSuccess("");
		} else {
		  setSuccess("Submitted value: " + name);
		  setError("");
		}
	  };
	  return (
		<>
		  <h3>UncontrolledForm</h3>
		  <form className="m-2 p-2" onSubmit={handleSubmit}>
			<div className="form-group">
			  <label htmlFor="username">Name: </label>
			  <input
				id="username"
				type="text"
				className="form-control"
				placeholder="Your name"
				ref={username}
				defaultValue="Srihitha"
			  />
			</div>
			<div className="form-group">
			  <input
				type="submit"
				className="mt-2 btn btn-sm btn-primary"
				value="Submit"
			  />
			</div>
			{success ? <div className="text-success">{success}</div> : null}
			{error ? <div className="text-danger">{error}</div> : null}
		  </form>
		</>
	  );
	};

	export default UncontrolledForms;