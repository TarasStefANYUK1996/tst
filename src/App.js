import React from "react";
import AddTask from './components/addTask';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css';
import Notice from "./components/notice/notice";
import Cookies from 'universal-cookie';

function App() {
  let ret;
  const cookies = new Cookies();
  const [style, setStyle] = useState(null);
  const [notText, setNotText] = useState("");
  const upData = async (method, id = '', status, newData = null) => {
    let datal = await getData('http://localhost:3003/posts/' + id);
    if (method === 'POST') {
      datal = newData;
    } else
      if (method === "PUT") {
        datal.state = status;
      }
    try {
      await fetch('http://localhost:3003/posts/' + id, {
        method: method, // или 'PUT'
        body: JSON.stringify(datal), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  const [data, setData] = useState([]);
  const [optionValue, setOptionValue] = useState("active");

  const getData = async (url) => {
    let response = await fetch(url);
    return response.json();;
  }
  const show = async (inp) => {
    if (inp.text !== "") {
      setNotText({type:'Добавили новое задание: ',text:inp.text});

      setStyle("opaAct");
      setTimeout(() => {
        setStyle(false);

      }, 3000);
      const news = [];
      news.push(inp)
      const fft = () => {
        let prev = cookies.get('data');
        let user = prev.filter(item => {
          if (item.id !== undefined) {
            return item.id;
          }
        }
        ).map(index => +index.id).sort(function (a, b) {
          return a - b;
        });
        prev.push(news[0]);
        prev[+prev.length - 1].id = +(user.slice(-1)) + 1;
        cookies.set('data', prev, { path: '/' })
        setData(cookies.get('data'));
      }
      fft();
    }
  }
  const changeOptVal = (value) => {
    setOptionValue(value);
  }
  const deletei = async (e, id) => {
    const serch = data.findIndex((element) => {
      return element.id === id;
    });
    if (e.closest(".delete") != null) {
      
      data[serch].state = "delete";
      cookies.set('data', data, { path: '/' })
      setNotText({type:'удалили задание ',text:data[serch].text});
  
     
    } else  if (e.closest(".save") != null) {
      if (optionValue === "delete" || optionValue === "complete") {
        data[serch].state = "active";
        cookies.set('data', data, { path: '/' })
        setNotText({type:"вернули задание ",text: data[serch].text});
      } else {
        setNotText({type:"выполнили задание ",text: data[serch].text});
        data[serch].state = "complete";
        cookies.set('data', data, { path: '/' })

      }
      // 45
      // setData(data);
      // setStyle("opaAct");
      // setTimeout(() => {
      //   setStyle(false);

      // }, 3000);
    }
    



    setData(data);
    setStyle("opaAct");
    setTimeout(() => {
      setStyle(false);

    }, 3000);
  }
  // const save = async (e, id, filter) => {
  //   const serch = data.findIndex((element, index, array) => {
  //     return element.id === id;
  //   });
   

  //   if (e.closest(".save") != null) {
  //     if (optionValue === "delete" || optionValue === "complete") {
  //       data[serch].state = "active";
  //       cookies.set('data', data, { path: '/' })
  //       setNotText("вернули задание " + data[serch].text + " на доработку");
  //     } else {
  //       setNotText("выполнили задание " + data[serch].text);
  //       data[serch].state = "complete";
  //       cookies.set('data', data, { path: '/' })

  //     }
  //     setData(data);
  //     setStyle("opaAct");
  //     setTimeout(() => {
  //       setStyle(false);

  //     }, 3000);
  //   }
  // }
  useEffect(() => {

    if (cookies.get('data')) {
      setData(cookies.get('data'));
    } else {
      getData("http://localhost:3003/posts").then((data) => {
        setData(data);
        cookies.set('data', data, { path: '/' });

      });
    }

  }, []);
  ret = style != null ? <Notice styles={style} notText={notText} /> : null

  return (
    <div className="App">
      {ret}
      <p>Список дел на сегодня:</p>
      <AddTask changeOptVal={changeOptVal} show={(e) => show(e)} />
      <TaskList  delete={deletei} arr={data} filter={optionValue} />

    </div>
  );
}

export default App;
