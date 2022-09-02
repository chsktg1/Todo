import "./App.css";
import Todos from "./Components/Todos";

import NewTodo from "./Components/NewTodo";
import { useState } from "react";

function App() {
  return (
    <>
      <Todos />
      <NewTodo />
    </>
  );
}

export default App;
