import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

import "./index.css";

function App() {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo list</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {Items.map((itemVal, index) => {
            return (
              <ToDoLists
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
