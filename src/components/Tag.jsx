import React from "react";
import "./Tag.css";
const Tag = ({ name, selectTag, selected }) => {
  const tagstyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JAVASCRIPT: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagstyle[name] : tagstyle.default}
      onClick={() => selectTag(name)}
    >
      {name}
    </button>
  );
};

export default Tag;
