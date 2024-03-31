import React from 'react';
import { useUser } from './UserContext';

// Example component
export const UserComponent: React.FC = () => {
  const { name, age, updateUser } = useUser();

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => updateUser('John', 30)}>Update User</button>
    </div>
  );
};
