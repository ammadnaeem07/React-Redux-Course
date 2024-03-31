import * as Yup from "yup";

export interface FieldType {
  name: string;
  type: string;
  class: string;
  placeholder: string;
  validation?: {
    min?: number;
    max?: number;
    regex?: RegExp;
  };
}

export interface FormsetProps {
  types: FieldType[];
}

export const generateInitialValues = (types: FieldType[]) => {
  const initialValues: { [key: string]: string } = {};
  types.forEach((field) => {
    initialValues[field.name] = "";
  });
  return initialValues;
};

export const generateValidationSchema = (types: FieldType[]) => {
  const validationSchema: { [key: string]: Yup.StringSchema } = {};
  types.forEach((field) => {
    validationSchema[field.name] = Yup.string().required(
      `${field.placeholder} is required`
    );
    if (field.validation) {
      const { min, max, regex } = field.validation;
      if (min)
        validationSchema[field.name] = validationSchema[field.name].min(
          min,
          `${field.placeholder} must be at least ${min} characters`
        );
      if (max)
        validationSchema[field.name] = validationSchema[field.name].max(
          max,
          `${field.placeholder} must be at most ${max} characters`
        );
      if (regex)
        validationSchema[field.name] = validationSchema[field.name].matches(
          regex,
          `${field.placeholder} is not valid`
        );
    }
  });
  return Yup.object().shape(validationSchema);
};
