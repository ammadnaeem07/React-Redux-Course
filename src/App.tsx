import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ProjectIndex,
  ProjectDetail,
  CounterComponent,
} from "./components/Project";
import { ProjectFrom } from "./contactproject/contact";

function App() {
  return (
    <div className="container">
      {/* <ProjectIndex/> */}
      <ProjectFrom />
      {/* <CounterComponent/> */}
    </div>
  );
}

export default App;
