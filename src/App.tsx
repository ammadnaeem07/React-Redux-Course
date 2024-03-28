import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectIndex, ProjectDetail, CounterComponent } from './components/Project';

function App() {
  return (
    <div className="container">
      <ProjectIndex/>
      <ProjectDetail/>
      <CounterComponent/>
    </div>
  );
}

export default App;
