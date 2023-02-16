import React from "react";

// onClick={() => deleteTask(task.id)} es la manera que tenemos para que nos traiga el id sin ejevutarlo cada vez que se reenderé la app

function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
