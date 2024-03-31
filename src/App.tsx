import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ProjectIndex,
  ProjectDetail,
  CounterComponent,
} from './components/Project';
import { ProjectFrom } from './contactproject/contact';
import HOCApp from './components/MyHocComponent';
import { DefaultHooks } from './components/DefaultHooks';
import { UserComponent } from './ContextAPIHook/UserComponent';
import { UserProvider } from './ContextAPIHook/UserContext';
import { DemoComponent } from './components/DemoComponent';

function App() {
  return (
    <div className="container">
      {/* <ProjectIndex/> */}
      {/* <ProjectFrom /> */}
      {/* <CounterComponent/> */}
      {/* <HOCApp/> */}
      {/* <DefaultHooks/> */}
      <UserProvider>
        <UserComponent />
        <DemoComponent />
      </UserProvider>
    </div>
  );
}

export default App;
