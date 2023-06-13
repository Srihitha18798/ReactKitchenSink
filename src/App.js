import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navigation from "./components/Navigation";

function App() {
  const TITLE = "React Kitchen Sink";
  return (
    <div className="container-fluid bg-light">
      <Header title={TITLE}/>

      <Navigation/>
      <Footer />
    </div>
  );
}

export default App;
