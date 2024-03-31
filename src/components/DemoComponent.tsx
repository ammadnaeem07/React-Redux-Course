import { useState } from 'react';
import { useUser } from '../ContextAPIHook/UserContext';

export const DemoComponent = () => {
  const { name, age, updateUser} = useUser();

  return (
    <>
      <h1>User Info from Demo Component</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => updateUser('Ammad', 10)}>Update User From Demo</button>
    </>
  );
};
