import React from "react";

interface listRaw {
  title: string;
  partner: string;
  price?: number;
}

const ListBox: React.FC<listRaw> = (listRaw) => {
  return (
    <>
      <div>
        <span>{listRaw.title}</span>
        <p>{listRaw.partner}</p>
      </div>
    </>
  );
};

export default ListBox;
