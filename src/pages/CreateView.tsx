import React from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function CreateView() {
  const myName = useFormInput("");
  const yourName = useFormInput("");

  return (
    <>
      <h1>저는 입력 화면 입니다.</h1>
      <input type="text" {...myName} />
      <br />
      <input type="text" {...yourName} />
      <br />
      <h4>
        {myName.value} 와 {yourName.value}
      </h4>
    </>
  );
}
