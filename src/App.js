import "./App.css";
import Todos from "./Components/Todos";

import NewTodo from "./Components/NewTodo";

import CompletedTodos from "./Components/CompletedTodos";

function App() {
  return (
    <>
      <h1>Add a Todo</h1>
      <NewTodo />
      <h2>All your Todos</h2>
      <Todos />
      <p>Completed Todos</p>
      <CompletedTodos />
    </>
  );
}

export default App;
