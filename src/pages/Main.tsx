import React from "react";
import "../styles/global-styles.css";
import "../styles/main.css";

export default function Main() {
  function display<T>(data:T[]): void{
    console.log(data.length);
    for(const elem of data){
      console.log(elem);
    }
  }

  display<number>([0,1,2,3]);
  display<string>(["hi","bye"]);

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
