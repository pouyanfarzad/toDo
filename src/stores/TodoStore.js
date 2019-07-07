import { observable, autorun } from "mobx";
import { action } from "mobx";
import TodoModel from "./TodoModel";
class TodoStore {
  @observable todos = [];
  lastId = 0;

  @observable
  todostmp = [];

  @action
  addTodo(title) {
    this.todos = this.todostmp;
    this.todos.push(new TodoModel(this, title, false, this.lastId++, false));
    this.todostmp = this.todos;
  }

  @action
  removeTodo(itemid) {
    this.todostmp.remove(this.todostmp[itemid]);
    this.lastId = this.lastId - 1;
    this.todostmp.forEach(todo => {
      if (todo.id > itemid) {
        todo.id = todo.id - 1;
      } else if (todo.id < itemid) {
        todo.id = todo.id;
      }
    });
    this.todos = this.todostmp;
  }
  
  @action
  All() {
    autorun(() => {
      this.todos = this.todostmp.filter(todo => todo.completed !== "");
    });
  }

  @action
  Active() {
    autorun(() => {
      this.todos = this.todostmp.filter(todo => todo.completed === false);
    });
  }

  @action
  Complete() {
    autorun(() => {
      this.todos = this.todostmp.filter(todo => todo.completed === true);
    });
  }

  @action
  Clear() {
    for (let i = 0; i < this.todostmp.length; i++) {
      if (this.todostmp[i].completed === true) {
        this.todostmp.remove(this.todostmp[i]);
        this.todostmp.forEach(todo => {
          if (todo.id > i) {
            todo.id = todo.id - 1;
          } else if (todo.id < i) {
            todo.id = todo.id;
          }
        });
        this.lastId--;
        i--;
      }
    }
    this.todos = this.todostmp;
  }
}

const store = new TodoStore();
export default store;
