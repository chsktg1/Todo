import { useState } from "react";
import { TodoPara, StatusPara, DateAddPara, Div } from "../styledComponents";
const TodoMaker = (props) => {
  const { e } = props;
  const { date_added, status, todo } = e;

  const [first, setfirst] = useState(status);

  const changeStatus = async (event) => {
    await setfirst(event.target.value);
    const { e } = props;
    const data = { pk: e.pk, toUpdate: event.target.value };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:3001/update", options);
    const { reloadAllTodos } = props;
    reloadAllTodos();
    console.log(response);
    console.log("from change status", first);
  };

  return (
    <Div>
      <TodoPara>{todo}</TodoPara>
      {/* <StatusPara>{status}</StatusPara> */}
      <select value={first} onChange={changeStatus}>
        <option value="completed">Completed</option>
        <option value="progress">Progress</option>
      </select>
      <DateAddPara>{date_added}</DateAddPara>
    </Div>
  );
};

export default TodoMaker;
