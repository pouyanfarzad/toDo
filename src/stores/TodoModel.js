import {observable} from 'mobx'
import { action } from "mobx";


class TodoModel{
    store
    id
    @observable title
    @observable completed
    @observable destroy;

    constructor(store, title, completed, id, destroy){
        this.title = title
        this.completed = completed
        this.id = id
        this.store = store;
        this.destroy = destroy;
    
    }
    @action 
    toggle(){
        this.completed = !this.completed
    }
}

export default TodoModel