import { FieldType } from "./commonfrom";
import { Formset } from "./form";

export const ProjectFrom = () => {
  const FormData: FieldType[] = [
    {
      name: "name",
      type: "text",
      class: "form-control",
      placeholder: "Full Name",
      validation: {
        min: 3,
        max: 50,
      },
    },
    {
      name: "email",
      type: "email",
      class: "form-control",
      placeholder: "Your Email",
      validation: {
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
    {
      name: "phone",
      type: "tel",
      class: "form-control",
      placeholder: "Phone Number",
      validation: {
        regex: /^[0-9]+$/,
        min: 10,
        max: 12,
      },
    },
  ];

  return (
    <>
      <h2>From Setup</h2>
      <Formset types={FormData} />
    </>
  );
};
