import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import TodoDelete from "./toDoDelete";

@observer
class TodoControllers extends Component {
  constructor(props) {
    super(props);
    this.active = this.active.bind(this);
    this.complete = this.complete.bind(this);
    this.all = this.all.bind(this);

    this.state = {
      filterAll: true,
      filterActive: false,
      filterCompleted: false
    };
  }
  all() {
    this.setState({
      filterAll: true,
      filterActive: false,
      filterCompleted: false
    });
    todoStore.All();
  }
  active() {
    this.setState({
      filterAll: false,
      filterActive: true,
      filterCompleted: false
    });
    todoStore.Active();
  }
  complete() {
    this.setState({
      filterAll: false,
      filterActive: false,
      filterCompleted: true
    });
    todoStore.Complete();
  }

  render() {
    console.log(todoStore.todos.length)
    if (todoStore.todostmp.length > 0) {
      return (
        <div className="footer">
          <button className="counter">
            <span>
              {todoStore.todostmp.filter(todo => todo.completed === false).length}
            </span>
            <strong> items left</strong>
          </button>
          <ul className="filters">
            <li onClick={this.all}>
              <button>
                <a className={this.state.filterAll ? "selected" : " "}>
                  {" "}
                  All
                </a>
              </button>
            </li>

            <li onClick={this.active}>
              <button type="submit">
                <a className={this.state.filterActive ? "selected" : " "}>
                  {" "}
                  Active
                </a>
              </button>
            </li>

            <li onClick={this.complete}>
              <button type="submit">
                <a className={this.state.filterCompleted ? "selected" : " "}>
                  Completed
                </a>
              </button>
            </li>
          </ul>
          <TodoDelete />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default TodoControllers;
