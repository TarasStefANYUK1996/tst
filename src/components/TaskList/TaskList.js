import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList(props) {
  const { arr, filter, deleted } = props;

  const listItem = arr.map((item) => {
    if (item.state === filter) {
      return (
        <TaskItem
          key={item.id}
          filter={item.state}
          deleted={(e) => deleted(e.target, item.id)}
          text={item}
        />
      );
    }
    return null;
  });
  return <div className="task_wrapper">{listItem}</div>;
}

export default TaskList;
