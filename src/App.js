
import AddTask from './components/addTask';
import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  const show = (inp) => {
    const news = [];
    news.push(inp)
    setData(() => [...data, ...news]);
  }
  const changeOptVal = (value) => {
    setOptionValue(value);
  }
  //12
  const deletei = (e, id) => {
    if (e.closest(".delete") != null) {
      let newd = [...data];
      newd[id].state = "delete";
      setData(newd);
    }

  }
  const save = (e, id, filter) => {
  
    if (e.closest(".save") != null) {
      let newd = [...data];
      if (filter === "complete") {
        newd[id].state = "active";
      }
      else {
        newd[id].state = "complete";
      }
      setData(newd);
    }

  }
  const changeStatus = (status) => {
  }
  const [data, setData] = useState([]);
  const [optionValue, setOptionValue] = useState("active");
  return (
    <div className="App">
      <AddTask changeStatus={changeStatus} changeOptVal={changeOptVal} show={(e) => show(e)} />

      <TaskList save={save} delete={deletei} arr={data} filter={optionValue} />
    </div>
  );
}

export default App;
