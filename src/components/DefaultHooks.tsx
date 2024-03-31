import { useState } from 'react';

export const DefaultHooks = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <>
    {state === false ? <h1>State False</h1> : <h1>State True</h1>}
    </>
  );
};
