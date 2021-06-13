import React from "react";

function ButtonBar({ onChangePage }) {
    return (
      <nav>
        <button onClick={() => onChangePage("Form")}>New Task</button>
        <button onClick={() => onChangePage("List")}>View Tasks</button>
      </nav>
    );
  }
  
  export default ButtonBar;