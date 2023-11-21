import React, { useState } from "react";

const Createtodo = () => {
  const [input, setInput] = useState(" ");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleChange = () => {
    setInput(event.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" onChange={handleChange}></input>
      <h1>input:{input}</h1>

      <button onClick={handleClick}>click</button>
      <h1>task={count}</h1>
    </React.Fragment>
  );
};

export default Createtodo;
