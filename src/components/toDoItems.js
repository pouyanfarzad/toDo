import React, { Component } from "react";
import ToDoItem from "./toDoItem";
import todoStore from "../stores/TodoStore"
import {observer} from 'mobx-react'


@observer
class ToDoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
            {
                todoStore.todos.map(todo => {
                    return(
                        <ToDoItem todo={todo}/>
                    )
                })
            }
        </ul>
      </section>
    );
  }
}


export default ToDoItems;
