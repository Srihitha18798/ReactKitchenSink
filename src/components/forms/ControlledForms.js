import axios from "axios";
import React, { useState } from "react";

	const formDataModel = {
	  username: "Srihitha",
	  address: "Hyderabad,Telangana,India",
	  base: "HYD",
	  gender: "Female",
	  hobbies: ["Travelling"],
	};

	const ControlledForms = () => {
	  // state variable will contains form data
	  const [formData, setFormData] = useState(formDataModel);

	  // state vairable to capture form submitted state
	  const [submitted, setSubmitted] = useState(false);

	  // update state variable for every change of input
	  const handleChange = (event) => {
		let { name, value, type } = event.target;
		const fieldValue =
		  type === "checkbox"
			? formData.hobbies.includes(value)
			  ? formData.hobbies.filter((hobby) => hobby !== value)
			  : [...formData.hobbies, value]
			: type === "radio"
			? value
			: value.trim();

		setFormData({ ...formData, [name]: fieldValue });
		// use the ES6 computed property name syntax to
		// update the key corresponding to field name
	  };

	  // handle form submit
	  const handleSubmit = (event) => {
		// this must be done to stop page refresh
		event.preventDefault();
		setSubmitted(true);

		axios.post("http://localhost:4000/data",formData)
		.then((response)=>{
			console.log(response.data)
		})
		.catch((error)=>{
			console.log("Cant post the data")
		})
	  };
	  return (
		<>
		  <h3>Controlled Form</h3>
		  <form className="m-2 p-2" onSubmit={handleSubmit}>
			{/* input type text */}
			<div className="form-group">
			  <label htmlFor="txtinput">Name: </label>
			  <input
				type="text"
				id="username"
				name="username"
				className="form-control"
				placeholder="Your name"
				value={formData.username}
				onChange={handleChange}
			  ></input>
			</div>
			{/* text area */}
			<div className="form-group">
			  <label htmlFor="address">Address: </label>
			  <textarea
				name="address"
				className="form-control"
				rows="3"
				value={formData.address}
				onChange={handleChange}
			  />
			</div>
			{/* select-option i.e., dropdown */}
			<div className="form-group">
			  <label htmlFor="locslct">Pick your location: </label>
			  <select
				id="locslct"
				className="form-control"
				name="base"
				value={formData.base}
				onChange={handleChange}
			  >
				<option value="BLR">BLR</option>
				<option value="MLR">MLR</option>
				<option value="TVM">TVM</option>
				<option value="MYS">MYS</option>
				<option value="HYD">HYD</option>
			  </select>
			</div>
			{/* input type radio */}
			<div className="form-group">
			  <label>Gender:</label>
			  <div className="form-check">
				<label>
				  <input
					type="radio"
					name="gender"
					className="form-check-input"
					value="Male"
					checked={formData.gender === "Male"}
					onChange={handleChange}
				  />
				  Male
				</label>
			  </div>
			  <div className="form-check">
				<label>
				  <input
					type="radio"
					name="gender"
					className="form-check-input"
					value="Female"
					checked={formData.gender === "Female"}
					onChange={handleChange}
				  />
				  Female
				</label>
			  </div>
			  <div className="form-check">
				<label>
				  <input
					type="radio"
					name="gender"
					className="form-check-input"
					value="Other"
					checked={formData.gender === "Other"}
					onChange={handleChange}
				  />
				  Other
				</label>
			  </div>
			</div>
			{/* input type checkbox */}
			<div className="form-group">
			  <label>Hobbies:</label>
			  <div className="form-row">
				<label htmlFor="reading">Reading</label>
				<input
				  type="checkbox"
				  id="reading"
				  name="hobbies"
				  value="Reading"
				  checked={formData.hobbies.includes("Reading")}
				  onChange={handleChange}
				/>
				<label htmlFor="travelling">Travelling</label>
				<input
				  type="checkbox"
				  id="travelling"
				  name="hobbies"
				  value="Travelling"
				  checked={formData.hobbies.includes("Travelling")}
				  onChange={handleChange}
				/>
				<label htmlFor="sports">Sports</label>
				<input
				  type="checkbox"
				  id="sports"
				  name="hobbies"
				  value="Sports"
				  checked={formData.hobbies.includes("Sports")}
				  onChange={handleChange}
				/>
			  </div>
			</div>

			{/* input type submit */}
			<div className="form-group">
			  <input
				type="submit"
				className="mt-2 btn btn-sm btn-primary"
				value="Submit"
			  />
			</div>
		  </form>
		  {submitted ? (
			<p className="m-2 p-2">
			  <strong>Entered Values: </strong> <br />
			  Name : <em> {formData.username} </em> <br />
			  Address : <em> {formData.address} </em> <br />
			  Base Location : <em> {formData.base} </em> <br />
			  Gender : <em> {formData.gender} </em>
			  <br />
			  Hobbies : <em> {formData.hobbies.join(",")} </em>
			</p>
		  ) : null}
		</>
	  );
	};

	export default ControlledForms;