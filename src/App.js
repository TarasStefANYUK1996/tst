
import AddTask from './components/addTask';
import TaskItem from './components/TaskItem/TaskItem';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {

  const show=(inp)=>{
    const news=[];
    news.push(inp)
    setData(()=>[...data, ...news]);

  }
const changeOptVal=(value)=>{
  setOptionValue(value);
}
  const deletei=(e,id)=>{
  
    if(e.closest(".delete")!=null){
let newd =[...data];
newd[id].state="delete";
      // let newd =[...data.slice(0,id), ...data.slice(id+1,data.length)];
      setData(newd);
      
    }
 console.log(data);
  

  }

  const save=(e,id,filter)=>{
  console.log(filter);
    if(e.closest(".save")!=null){
let newd =[...data];
if(filter==="complete"){
  newd[id].state="active";
}
else{
  newd[id].state="complete";
}
       setData(newd);
      
    }
 console.log(data);
  

  }






  const changeStatus=(status)=>{
// console.log(status);
  }
  const [data, setData]=useState([]);
  const [optionValue, setOptionValue]=useState("active");
  // console.log(optionValue);
  return (
    <div className="App">
     <AddTask changeStatus={changeStatus} changeOptVal={changeOptVal} show={(e)=>show(e)}/>
       {/* <TaskItem text={data}/>  */}
      <TaskList save={save} delete={deletei} arr={data} filter={optionValue}/>
    </div>
  );
}

export default App;
