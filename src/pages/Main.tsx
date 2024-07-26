import React from "react";
import "../styles/global-styles.css";
import "../styles/main.css";
import { Link } from "react-router-dom";

export default function Main() {
  interface listRaw {
    title: string;
    partner: string;
    price: number;
    today(): number;
  }

  class listOne implements listRaw {
    title: string;
    partner: string;
    price: number;

    constructor(title: string, partner: string, price: number) {
      this.title = title;
      this.partner = partner;
      this.price = price;
    }

    today(): number {
      return 2024;
    }
  }

  // let firstList: listRaw = { title: "title1", partner: "Ken", price: 300000 };
  let firstList = new listOne("title", "prtner", 300000);

  function justPrint<T>(element: T): void {
    console.log(element);
  }

  justPrint<number>(20);
  justPrint<string>("hi");

  return (
    <>
      <div className="main-box">
        <span>내 돈 내놔</span>
        <hr />
        <div>
          <p>{firstList.title}</p>
          <p>{firstList.partner}</p>
          <span>{firstList.price}</span>
        </div>

        <button>
          <Link to="/create">등록</Link>
        </button>
        
      </div>
    </>
  );
}
