import React, { useState } from "react";
import "./Taskform.css";
import Tag from "./Tag";

export const Taskform = ({ setTasks, tasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "TO DO",
    tags: [], // add the tags to tis array if it doesnt already exis in the array
  });
  const checktag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (taskData.tags.some((items) => items === tag)) {
      const filtertags = taskData.tags.filter((item) => item !== tag); // filter met will filter acc  to condition and return new array
      //now to update the array with new filtered value
      setTaskData((prev) => {
        return { ...prev, tags: filtertags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] }; //...prev.tag will show previously selected tags otherwise  only the current clicked tag will be shown
      });
    }
  };

  const handleChange = (e) => {
    // const name = e.target.name;//name of the thing ie task or status
    // const value = e.target.value;//current value this 2 line code can be written as follows
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
      //gives op like a name-value pair like this:{task: 'sa', status: 'todo'} sets prev value to new value
    });
  }; //{ ...prev, [name]: value } is an object spread operation. It takes the previous state object (prev), creates a shallow copy of it using the spread operator ({ ...prev }), and then updates a specific property of the object with the new value.
  // { ...prev } copies all the key-value pairs from the previous state into a new object.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "TO DO",
      tags: [],
    });
  };

  // form might have some default behaviours.whenever we submit(press add task)handlesubmit will work and  page gets refrehed .
  //we need to prevent that by using preventdefaults that stops form def behaviours
  // handleSubmit can also given in submit part but will only work if u click submit.here it will work after typing and press enter or choosing the status
  //another way to set state change
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");
  // const handletaskchange = (e) => {
  //   setTask(e.target.value); //created a function that defines the usestate functionality. To get value of the input typed into the form
  // };
  // const handlestatuschange = (e) => {
  //   setStatus(e.target.value);
  // };// the value of dropdown menu
  // console.log(task, status);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task" //this spuld be the same var name given inside usestate as default
          // this is to set the current value to task variable
          value={taskData.task}
          placeholder="enter your task"
          onChange={handleChange}
        ></input>

        <div className="task_form_bottom_line">
          <Tag name="HTML" selectTag={selectTag} selected={checktag("HTML")} />

          <Tag name="CSS" selectTag={selectTag} selected={checktag("CSS")} />
          <Tag
            name="REACT"
            selectTag={selectTag}
            selected={checktag("REACT")}
          />
          <Tag
            name="JAVASCRIPT"
            selectTag={selectTag}
            selected={checktag("JAVASCRIPT")}
          />

          <div>
            <select
              className="task_status"
              name="status" //to set the value selected from dropdown to status var
              value={taskData.tags}
              onChange={handleChange}
            >
              <option className="TO DO">TO DO</option>
              <option className="DOING">DOING</option>
              <option className="DONE">DONE</option>
            </select>
            <button type="submit" className="task_submit">
              +Add task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};
