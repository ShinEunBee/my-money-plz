import React from "react";

interface listRaw {
  title: string;
  partner: string;
  price?: number;
}

const ListBox: React.FC<listRaw> = (listRaw) => {
  return (
    <>
      <div className="list-box">
        <span>{listRaw.title}</span>
        <p>{listRaw.partner}</p>
      </div>
    </>
  );
};

export default ListBox;
