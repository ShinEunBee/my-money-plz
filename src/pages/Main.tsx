import React from "react";
import "../styles/global-styles.css";
import "../styles/main.css";

export default function Main() {

  function printName<T> (name: T){
    console.log(name);
  }

  printName<string>('ㅎㅎ');
  printName<number>(90);
  return (
    <>
      <div className="main-box">
        <span>제목</span>
        <hr />
        <p>내용</p>
      </div>
    </>
  );
}
