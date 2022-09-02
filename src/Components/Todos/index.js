import { useEffect, useState } from "react";
import TodoMaker from "../TodoMaker";
import NewTodo from "../NewTodo";
const Todos = () => {
  const [allTodos, updateTodos] = useState([]);

  const loadData = async () => {
    const response = await fetch("http://localhost:3001");
    console.log(response);
    const data = await response.json();
    // console.log(data);
    updateTodos(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log("allTodos", allTodos);
  return (
    <div>
      <h1>All Todos</h1>
      <NewTodo />
      {allTodos === [] ? (
        <p>Loading</p>
      ) : (
        <table>
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
