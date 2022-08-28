import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import AddTask from "./components/addTask";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";
import Notice from "./components/notice/notice";

function App() {
  const [style, setStyle] = useState(null);
  const [notText, setNotText] = useState("");
  const [data, setData] = useState([]);
  const [optionValue, setOptionValue] = useState("active");
  const [optLength, setOptLength] = useState({ active: 5 });

  const cookies = useMemo(() => new Cookies(), []);
  const show = (inp) => {
    if (inp.text.replace(/^\s+|\s+$/g, "")) {
      setNotText({ type: "Добавили новое задание: ", text: inp.text });
      setStyle("opaAct");
      setTimeout(() => {
        setStyle(false);
      }, 3000);
      const news = [];
      news.push(inp);
      const fft = () => {
        const prev = cookies.get("data");
        const user = prev
          .filter((item) => {
            if (item.id !== undefined) {
              return item.id;
            }
            return false;
          })
          .map((index) => +index.id)
          .sort((a, b) => a - b);
        prev.push(news[0]);
        prev[+prev.length - 1].id = +user.slice(-1) + 1;
        cookies.set("data", prev, { path: "/" });
        setData(cookies.get("data"));
      };
      fft();
    } else {
      setNotText({ type: "Невозможно добавить пустой елемент " });
      setStyle("opaAct");
      setTimeout(() => {
        setStyle(false);
      }, 3000);
    }
  };
  const changeOptVal = (value) => {
    setOptionValue(value);
  };
  const deletei = (e, id) => {
    const serch = data.findIndex((element) => element.id === id);
    if (e.closest(".delete") != null) {
      if (data[serch].state === "delete") {
        setNotText({
          type: "Удалили задание совсем: ",
          text: data[serch].text,
        });
        data.splice(serch, 1);

        cookies.set("data", data, { path: "/" });
      } else {
        data[serch].state = "delete";
        cookies.set("data", data, { path: "/" });
        setNotText({ type: "Удалили задание: ", text: data[serch].text });
      }
    } else if (e.closest(".save") != null) {
      if (optionValue === "delete" || optionValue === "complete") {
        data[serch].state = "active";
        cookies.set("data", data, { path: "/" });
        setNotText({ type: "Вернули задание: ", text: data[serch].text });
      } else {
        setNotText({ type: "Выполнили задание: ", text: data[serch].text });
        data[serch].state = "complete";
        cookies.set("data", data, { path: "/" });
      }
    }

    setStyle("opaAct");
    setTimeout(() => {
      setStyle(false);
    }, 3000);
    setData(cookies.get("data"));
  };

  useEffect(() => {
    if (cookies.get("data")) {
      setData(cookies.get("data"));
    } else {
      const datas = [
        {
          text: "Задание № 1",
          state: "active",
          id: 3,
        },
        {
          text: "Задание № 2",
          state: "active",
          id: 1,
        },
      ];

      setData(datas);
      cookies.set("data", datas, { path: "/" });
    }
  }, [cookies]);
  useEffect(() => {
    const filt = (stat) => {
      const res = data.filter((item) => item.state === stat);
      return res.length;
    };

    setOptLength({
      active: filt("active"),
      complete: filt("complete"),
      delete: filt("delete"),
    });
  }, [data, cookies]);
  const ret =
    style != null ? <Notice styles={style} notText={notText} /> : null;

  return (
    <div className="App">
      {ret}
      <p>Список дел на сегодня:</p>
      <AddTask
        changeOptVal={changeOptVal}
        show={(e) => show(e)}
        optLength={optLength}
      />
      <TaskList deleted={deletei} arr={data} filter={optionValue} />
    </div>
  );
}

export default App;
