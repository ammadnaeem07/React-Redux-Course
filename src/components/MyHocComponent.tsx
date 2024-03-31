import React, { ComponentType } from 'react';

// Define the props for the wrapped component
interface WrappedComponentProps {
  name: string;
}

// Define the props for the HOC
interface HocProps {
  hocProp: string;
}

// Define a function that takes a component and returns a new component
const withHigherOrderComponent = <P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) => {
  // Return a new functional component
  return function HocComponent(props: Omit<P, keyof HocProps> & HocProps) {
    // Extract the hocProp from props
    const { hocProp, ...rest } = props;

    // Render the wrapped component with additional props
    return <WrappedComponent {...(rest as unknown as P)} />;
  };
};

// Define a simple component
const MyComponent: React.FC<WrappedComponentProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Create a new component by wrapping MyComponent with the HOC
const MyHocComponent = withHigherOrderComponent(MyComponent);

// Usage of the new component
const HOCApp: React.FC = () => {
  return <MyHocComponent name="John" hocProp="This is a hoc prop" />;
};

export default HOCApp;
