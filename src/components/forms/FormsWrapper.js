import ControlledForms from "./ControlledForms";
import UncontrolledForms from "./UncontrolledForms";

	const FormsWrapper = () => {
	  return (
		<>
		  <h2>Forms in React</h2>
		  <article className="m-1 border border-secondary rounded">
			<UncontrolledForms />
		  </article>
          <article className="m-1 border border-secondary rounded">
			<ControlledForms/>
		  </article>
		</>
	  );
	};

	export default FormsWrapper;