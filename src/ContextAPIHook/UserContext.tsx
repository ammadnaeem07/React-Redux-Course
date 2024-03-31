import React, { createContext, useContext, useState } from 'react';

// Define a context
interface UserContextType {
  name: string;
  age: number;
  updateUser: (name: string, age: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext); // 
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Provider component
export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<UserContextType | null>(null);

  // Function to update user
  const updateUser = (name: string, age: number) => {
    setUser(prevUser => {
      if (prevUser) {
        return { ...prevUser, name, age };
      }
      return null;
    });
  };

  // Initialize the user context when the component mounts
  React.useEffect(() => {
    setUser({ name: '', age: 0, updateUser });
  }, []);

  if (!user) {
    return null; // Render nothing until the user context is initialized
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
