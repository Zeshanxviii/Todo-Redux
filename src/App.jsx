import TodoForm from "./components/Todoform";
import TodoItem from "./components/TodoItem";

export default function App() {
  return (
    <div className="min-h-screen p-40">
    <div className="text-3xl font-bold">
      <h1 className="text-4xl font-bold text-center">Todo App using Redux toolkit</h1>
      <br/>
      <TodoForm/>
      <TodoItem/>
    </div>
    </div>
  )
}