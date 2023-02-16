import TaskCard from './TaskCard'
function TaskList({ tasks , deleteTask}) {
  // Task en vez de props
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard 
        key={task.id} 
        task={task} 
        deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
