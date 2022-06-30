import TaskItem from "../TaskItem/TaskItem";
const TaskList=(props)=>{
    // console.log(props.arr);
   
    const listItem=props.arr.map((item,index)=>{
    // console.log(item.state);
        if(item.state===props.filter){
            return <TaskItem key={index} filter={item.state} save={(e)=>props.save(e.target,index,props.filter)} delete={(e)=>props.delete(e.target,index)} text={item}/>
        }
        return;
   
    });
    // console.log(listItem);
return(
    <div className="task_wrapper">
{listItem}
    </div>
    
);
}
export default TaskList;