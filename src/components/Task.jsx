import React from "react";

const Task = ({ task, styleVariant }) => {
  return task ? (
    <div className={styleVariant}>
      <h3 className="title">{task.title}</h3>
      <p className="description">{task.description}</p>
      <p className="date">{task.creationDate}</p>
      <p className="date">{`${task.deadline},  ${task.deadlineTime}`}</p>
    </div>
  ) : null;
};

export default Task;
