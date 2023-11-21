import React from "react";

import "./Taskcolumn.css";
import Taskcard from "./Taskcard";
// alternatively you can write const Taskcoloumn = {name,icon}=> {
// or const{name,icons}=props;
const Taskcoloumn = ({ title, icon, tasks, status, handleDelete }) => {
  console.log(tasks);
  return (
    <section className="task_coloumn">
      <h2 className="task-column-heading">
        <img className="Taskcolumn-image " src={icon} alt=" " />
        {title}
        {/* <img className="Taskcolumn-image " src={icon} alt=" " />
        {name} */}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <Taskcard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default Taskcoloumn;
