import { useState } from "react";
const NewTodo = (props) => {
  const [first, setfirst] = useState({ todoText: "", status: "progress" });

  const addData = async (e) => {
    // console.log(e);
    // e.preventDefault();
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    const postData = {
      todo: first.todoText,
      status: first.status,
      date_added: new Date(),
    };
    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch("http://localhost:3001/add", options);
    const data = await response.text();
    console.log(data);
    setfirst({ ...first, todoText: "", status: "progress" });
  };

  return (
    <>
      <label>
        <input
          type="text"
          value={first.todoText}
          onChange={(e) => {
            setfirst({ ...first, todoText: e.target.value });
          }}
        />
      </label>
      <select
        value={first.status}
        onChange={(e) => {
          setfirst({ ...first, status: e.target.value });
        }}
      >
        <option value="progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={addData}>Add</button>
    </>
  );
};

export default NewTodo;
