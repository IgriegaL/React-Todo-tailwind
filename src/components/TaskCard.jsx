// Para usar los contextos creados
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// onClick={() => deleteTask(task.id)} es la manera que tenemos para que nos traiga el id sin ejevutarlo cada vez que se reenderé la app

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  // Llamamos al context a través del use para usarlo
  // Y luego dentro de el, usarmos TaskContext
  // Con esto ya tenemos acceso al contexto de TaskContext
  // para usar el contexto necesitamos el useContext y e importar el contexto que tenemos creado
  //const valor = useContext(TaskContext);
  //console.log(valor);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 text-red-800 px-2 rounded-md py-1 mt-4  hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
