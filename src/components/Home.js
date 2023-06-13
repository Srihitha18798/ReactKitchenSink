import React from "react";

const Home = () => {
  return (
    <>
      <h2>Welcome to React 18 Demo</h2>
      <p>
        Click on each of the links to see the demo of the particular concept.
        You can then check each component code to see how they have to be used.
      </p>
      <p>
        <span className="text-warning">NOTE: </span>At this point the app already uses:

        <ol className="list-group">
            <li className="list-group-item">Components</li>
            <li className="list-group-item">Component Hierarchy</li>
            <li className="list-group-item">React Fragments</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Routing</li>

        </ol>
      </p>
    </>
  );
};

export default Home;
