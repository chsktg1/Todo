import "./App.css";
import Todos from "./Components/Todos";
import { Route, Routes, useParams } from "react-router-dom";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
function App() {
  return (
    <Routes>
      {/* <NewTodo /> */}
      {/* <Login /> */}
      <Route element={<Signup />} path="/signup" />
      <Route element={<ProtectedRoute />} path="/">
        <Route element={<Todos />} path="/todos" />
      </Route>
      <Route element={<Login />} path="/login" />
      {/* <Todos /> */}
      {/* <p>Completed Todos</p> */}
      {/* <CompletedTodos /> */}
    </Routes>
  );
}

export default App;
