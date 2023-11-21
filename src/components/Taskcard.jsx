import React from "react";
import "./Taskcard.css";
import Tag from "./Tag";
import deleteicon from "../assets/delete.png";
const Taskcard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>
      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected={true} />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img src={deleteicon} className="delete-icon" alt=""></img>
        </div>
      </div>
    </article>
  );
};

export default Taskcard;
