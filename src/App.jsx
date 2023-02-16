import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  // Función q crea la task al ult del nuevo Array
  function createTask(task) {
    const nTarea= {
      title: task.title,
      id: tasks.length,
      description: task.description,
    }
    console.log(nTarea)
    setTasks([
      ...tasks,
      nTarea,
    ]);
  }
  // deleteTask={deleteTask} es para pasarle de un componente a otro una función
  function deleteTask (taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // Pasamos createTask a tanskform
  // a TaskList le pasamos task
  return (
    <>
      
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
