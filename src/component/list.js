import React, { useState } from "react";
import Entry from "./entry"

const List = ({
  itemName,
  index,
  itemsToBuys,
  setItemsToBuys,
  isPurchased,
}) => {
  const [isChecked, setIsChecked] = useState(isPurchased);

  const deleteHandler = () => {
    setItemsToBuys((prevState) => {
      const data = [...prevState];
      data.splice(index, 1);
      return data;
    });
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setItemsToBuys((prevState) => {
      const data = [...prevState];
      data[index].purchased = !isChecked;
      return data;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        color: "red",
      }}
    >
      <div>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      </div>

      <div>
        <p
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {itemName}
        </p>
      </div>

      <div>
        <button onClick={deleteHandler}>DELETE</button>
      </div>
    </div>
  );
};

export default List;
