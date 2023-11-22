import React, { useState } from "react";
import "./Taskform.css";
import Tag from "./Tag";

export const Taskform = ({ setTasks, tasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "TO DO",
    tags: [],
  });
  const checktag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const selectTag = (tag) => {
    if (taskData.tags.some((items) => items === tag)) {
      const filtertags = taskData.tags.filter((item) => item !== tag);

      setTaskData((prev) => {
        return { ...prev, tags: filtertags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

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

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
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
              name="status"
              value={taskData.status}
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
