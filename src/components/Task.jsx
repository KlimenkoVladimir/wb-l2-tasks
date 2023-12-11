import React from "react";

const Task = ({ task, styleVariant }) => {
  return task ? (
    <div className={styleVariant}>
      <h3 className="title">{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.deadline}</p>
      <p>{task.creationDate}</p>
      {/* <button>Изменить</button>
      <button>Удалить</button> */}
    </div>
  ) : null;
};

export default Task;
