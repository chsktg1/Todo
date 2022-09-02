import { useEffect, useState } from "react";
import TodoMaker from "../TodoMaker";
import "./index.css";

const Todos = () => {
  const [allTodos, updateTodos] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001");

    const data = await response.json();
    // console.log(data);
    updateTodos(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>All Todos</h1>

      {allTodos === [] ? (
        <p>Loading</p>
      ) : (
        <table>
          <thead>
            <td>Todo</td>
            <td>status</td>
            <td>added on</td>
          </thead>
          <tbody>
            {allTodos.map((e) => (
              <TodoMaker key={e.pk} e={e} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todos;
