import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormsetProps,
  generateInitialValues,
  generateValidationSchema,
} from "./commonfrom";

const handleSubmit = (values: any) => {
  const jsonValues = JSON.stringify(values, null, 2);
  alert(`Form Values: ${jsonValues}`);
};

export const Formset: React.FC<FormsetProps> = ({ types }) => {
  const initialValues = generateInitialValues(types);
  const validationSchema = generateValidationSchema(types);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {types.map((field, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <Field
              type={field.type}
              className={field.class}
              name={field.name}
              placeholder={field.placeholder}
            />
            <ErrorMessage name={field.name} component="div" className="error" />
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
