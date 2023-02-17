import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";

export const TaskContext = createContext();
// Se crea el provider que encapsula

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)
  // Función q crea la task al ult del nuevo Array
  function createTask(task) {
    const nTarea = {
      title: task.title,
      id: tasks.length,
      description: task.description,
    };
    console.log(nTarea);
    setTasks([...tasks, nTarea]);
    console.log(tasks, nTarea)
  }

  // deleteTask={deleteTask} es para pasarle de un componente a otro una función
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  // Pasaremos por el value en forma de objeto, todos las variables y funciones para que se puedan utilizar donde llevemos nuestro context

  useEffect(() => {
    // El useEffect lo que hace es establecer / setear los datos en la variable tasks
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
