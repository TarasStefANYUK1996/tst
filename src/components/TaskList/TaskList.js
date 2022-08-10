import React from "react";
import TaskItem from "../TaskItem/TaskItem";
const TaskList = (props) => {

    const listItem = props.arr.map((item,index) => {
        // console.log(props)
        if (item.state === props.filter) {
            return <TaskItem key={index} filter={item.state}  delete={(e) => props.delete(e.target, item.id)} text={item} />
        }
        return null;
    });
    return (
        <div className="task_wrapper">
            {listItem}
        </div>
    );
}
export default TaskList;