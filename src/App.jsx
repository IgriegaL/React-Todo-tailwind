import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  // Pasamos createTask a tanskform
  // a TaskList le pasamos task
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
