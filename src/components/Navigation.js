import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import JSXExpressions from "./JSXExpressions";
import NotFound from "./NotFound";
import Events from "./Events";
import Parent from "./props/Parent";
import StateDemo from "./StateDemo";
import ParentDt from "./dt/Parent"
import EffectWrapper from "./lc/EffectWrapper";
import FormsWrapper from "./forms/FormsWrapper";
import WS from "./WS";

const Navigation = () => {
  return (
    <Router>
      <>
        <div className="p-2">
          <section className="p-1 border border-secondary rounded">
            <nav className="nav nav-pills nav-justified">
              <NavLink to="home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="jsxepressions" className="nav-link">
                JSXExpressions
              </NavLink>
              <NavLink to="events" className="nav-link">
                Events
              </NavLink>
              <NavLink to="props" className="nav-link">
                Props
              </NavLink>
              <NavLink to="stateDemo" className="nav-link">
                StateDemo
              </NavLink>
              <NavLink to="dataTransfer" className="nav-link">
                DataTransfer
              </NavLink>
              <NavLink to="lc" className="nav-link">
                Lifecycle Components
              </NavLink>
              <NavLink to="ws" className="nav-link">
                Web Services
              </NavLink>
              <NavLink to="forms" className="nav-link">
                Forms
              </NavLink>
            </nav>
          </section>
        </div>

        <div className="p-2">
        <section className="p-1 border border-secondary rounded">
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/jsxepressions" element={<JSXExpressions/>}></Route>
            <Route path="" element={<Navigate to="/home"/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/props" element={<Parent/>}></Route>
            <Route path="/stateDemo" element={<StateDemo/>}></Route>
            <Route path="/dataTransfer" element={<ParentDt/>}></Route>
            <Route path="/lc" element={<EffectWrapper/>}></Route>
            <Route path="/ws" element={<WS/>}></Route>
            <Route path="/forms" element={<FormsWrapper/>}></Route>





          </Routes>
        </section>
      </div>
      </>
    </Router>
  );
};

export default Navigation;
