import "./App.css";
import Todos from "./Components/Todos";

// import NewTodo from "./Components/NewTodo";

// import CompletedTodos from "./Components/CompletedTodos";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add a Todo</h1>
      {/* <NewTodo /> */}

      <Todos />
      {/* <p>Completed Todos</p> */}
      {/* <CompletedTodos /> */}
    </>
  );
}

export default App;
