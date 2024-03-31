import { useState } from "react";
import { Input } from "./Input";

export const ProjectIndex = () => {
  return <h1>Project Index</h1>;
};

export const ProjectDetail = () => {
  return <ProjectSave />;
};

const ProjectSave = () => {
  return (
    <>
      <form>
        <Input type={"text"} />
        <Input type={"password"} />
        <Input type={"file"} />
        <Input type={"submit"} />
      </form>
    </>
  );
};

export const CounterComponent = () => {
  const [currState, setCurrState] = useState<number>(0);
  const handlePlus = () => {
    return setCurrState(currState + 1);
  };
  const handleMinus = () => {
    setCurrState(currState - 1);
  };
  return (
    <>
      <button onClick={handlePlus}>+</button>
      <span>{currState}</span>
      <button onClick={handleMinus}>-</button>
    </>
  );
};
