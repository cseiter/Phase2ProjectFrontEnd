import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import ButtonBar from "./ButtonBar";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <ButtonBar onChangePage={setPage}/>
      {page === "Form" ? <TaskForm /> : <TaskList />}
    </main>
  );
}

export default App;