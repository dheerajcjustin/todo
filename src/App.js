import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  function handleDeleteClick(id) {
    const removeItem = toDos.filter((toDo) => {
      return toDo.id !== id;
    });
    setToDos(removeItem);
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednegfsdfsasday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
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
