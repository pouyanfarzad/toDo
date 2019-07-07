import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import ToDoEntry from "./components/toDoEntry";
import ToDoItems from "./components/toDoItems"
import TodoControllers from "./components/toDoControllers";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <ToDoEntry/>
        <ToDoItems/>
        <TodoControllers/>
      </div>
    );
  }
}

export default App;
