import {
  MainDiv,
  TodoParaHeading,
  StatusParaHeading,
  DateAddParaHeading,
} from "../styledComponents";

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
        <MainDiv>
          <div className="todoHeader">
            <TodoParaHeading>todo</TodoParaHeading>
            <StatusParaHeading>status</StatusParaHeading>
            <DateAddParaHeading>date_added</DateAddParaHeading>
          </div>

          {allTodos.map((e) => (
            <TodoMaker key={e.pk} e={e} />
          ))}
        </MainDiv>
      )}
    </div>
  );
};

export default Todos;
