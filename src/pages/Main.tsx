import React from "react";
import "../styles/global-styles.css";
import "../styles/main.css";
import { Link } from "react-router-dom";
import ListBox from "../components/ListBox";

export default function Main() {
  // interface listRaw {
  //   title: string;
  //   partner: string;
  //   price: number;
  //   today(): number;
  // }

  // class listOne implements listRaw {
  //   title: string;
  //   partner: string;
  //   price: number;

  //   constructor(title: string, partner: string, price: number) {
  //     this.title = title;
  //     this.partner = partner;
  //     this.price = price;
  //   }

  //   today(): number {
  //     return 2024;
  //   }
  // }

  // let firstList: listRaw = { title: "title1", partner: "Ken", price: 300000 };
  // let firstList = new listOne("title", "prtner", 300000);

  // function justPrint<T>(element: T): void {
  //   console.log(element);
  // }

  // justPrint<number>(20);
  // justPrint<string>("hi");

  return (
    <>
      <div>
        <span>내 돈 내놔</span>
        <hr />
        <div >
          <ListBox title="제목1" partner="김일비"/>
          <ListBox title="제목2" partner="김둘비"/>
          <ListBox title="제목3" partner="김셋비"/>
        </div>

        <button>
          <Link to="/create">등록</Link>
        </button>
      </div>
    </>
  );
}
