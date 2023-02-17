import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  // Ahora value tiene un objeto y las funciones que almacenamos, como es un obj vamos a desestrcuturarlo:

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  // los value nos van a servir para reflejar el estado de la variable si cambia
  // autofocus, sive para que cuando cargue la página se encuentre el cursor en el primer input
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-800 p-10 mb-4">
        <h2 className="text-xl font-bold text-white pb-2">Crea tu tarea</h2>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-3"
        />
        <textarea
          placeholder="Escribe descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-3"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar </button>
      </form>
    </div>
  );
}

export default TaskForm;
