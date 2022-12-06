import React from "react";
import "./App.css";
import moment from "moment";
import { useState } from "react";
// const time = moment.day(7);
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  function handleDeleteClick(id) {
    const removeItem = toDos.filter((toDo) => {
      return toDo.id !== id;
    });
    setToDos(removeItem);
  }
  const addButtonHandler = () => {
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>
          Whoop, it's ❤ {moment().format("dddd")}
          {/* {moment.locale("ml").format("dddd")} */}
        </h2>
        <h3>lets organize our day </h3>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i onClick={addButtonHandler} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((obj) => {
                        if (obj.id === value.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => handleDeleteClick(value.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}

        {toDos.map((value) => {
          if (value.status) {
            return <h1 className="list">{value.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
