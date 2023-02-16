import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({title, description});
    setTitle('')
    setDescription('')
  };

  

    // los value nos van a servir para reflejar el estado de la variable si cambia
    // autofocus, sive para que cuando cargue la página se encuentre el cursor en el primer input
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea 
      
      placeholder="Escribe descripción"
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar </button>
    </form>
  );
}

export default TaskForm;
