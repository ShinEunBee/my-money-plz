import React from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function Main() {
  const firstNameProps = useFormInput("음북");
  const lastNameProps = useFormInput("신");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
