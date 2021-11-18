import NewTodo from "./components/NewTodo"
import AllTodos from "./components/AllTodos";

function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <NewTodo />
      <AllTodos />
    </div>
  );
}

export default App;
