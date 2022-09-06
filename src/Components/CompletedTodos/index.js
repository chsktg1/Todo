import { useState, useEffect } from "react";
import TodoMaker from "../TodoMaker";
const CompletedTodos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3001/completed");

      const data1 = await response.json();

      setData(data1);
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((e) => (
        <TodoMaker e={e} key={e.pk} />
      ))}
    </div>
  );
};

export default CompletedTodos;
