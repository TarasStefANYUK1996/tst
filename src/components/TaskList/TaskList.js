import TaskItem from "../TaskItem/TaskItem";
const TaskList = (props) => {
    const listItem = props.arr.map((item, index) => {
        if (item.state === props.filter) {
            return <TaskItem key={index} filter={item.state} save={(e) => props.save(e.target, index, props.filter)} delete={(e) => props.delete(e.target, index)} text={item} />
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