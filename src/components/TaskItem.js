import React from "react";

function TaskItem({ task,onDeleteTask }) {
  const { id, name, image, template } = task;

  function selectTask(e) {
    console.log(`Task ${id}, ${name} selected`);
    let target = e.currentTarget;
    target.classList.toggle('selected')
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteTask(task);
  });
}

  return (
    <li>
      <h4>Task {id}</h4><button onClick={handleDeleteClick}>Delete Task</button>
      <h5>{name}</h5>
      <br /><img src={image} alt={name} onClick={selectTask} />
      <br />{template}
    </li>
  );
}

export default TaskItem;
