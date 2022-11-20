import React from "react";
import "./Todoitems.css";
const TodoItems = (props) => {
  const { items, deleteItem } = props;

  let length = items.length;

  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name"> {item.nameoftask} </span>
          <span className="time" > {item.time} </span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
          {/*عملت arrwo fun عشان لو معملتهاش الحذف هيحصل اول ما الكومبوننت يحمل*/}
          
        </div>
      );
    })
  ) : (
    <p>there is no items to show </p>
  );

  return (
    <div className="ListItems">
      <div>
        <span className="name task"> Name of task </span>
        <span className="time task"> Time of task </span>
        <span className="action task" > Action </span>
      </div>
      {ListItems}
    </div>
  );
};
export default TodoItems;
