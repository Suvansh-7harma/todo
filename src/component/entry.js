import React, { useState } from "react";
import List from "./list";

const Entry = () => {
  const [itemsToBuys, setItemsToBuys] = useState([]);
  const [textInputValue, setTextInputValue] = useState("");

  const onClickHandler = () => {
    
    const newItem = {
      name: textInputValue,
      purchased: false,
    };
    
   
    setItemsToBuys([...itemsToBuys, newItem]);

    
    setTextInputValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        border: "5px solid black",
      }}
    >
      <div
        style={{
          backgroundColor: "#b3b3ff",
          padding: "50px ",
          width: "60vw",
          border: "5px solid black",
        }}
      >
        <h2>Grocery Bud</h2>
        <div>
          <input
            value={textInputValue}
            onChange={(e) => {
              setTextInputValue(e.target.value);
            }}
            type="text"
          />
          <button onClick={onClickHandler}>Add Item</button>
        </div>

        <div>
          {itemsToBuys.map((elem, index) => (
            <List
              itemsToBuys={itemsToBuys}
              setItemsToBuys={setItemsToBuys}
              index={index}
              itemName={elem.name}
              isPurchased={elem.purchased}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entry;
