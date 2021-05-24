
import store from "../store";
import { todosActions } from "../store/actions/todos.actions";
import { Todo } from "../store/reducers/todos.reducer";



//import http from "../utils/http";

export class TodoService {

    setNewTodo(todo: Todo){
        store.dispatch(todosActions.setNewTodo(todo))
    }

    setTodoDone(todo: Todo){
        store.dispatch(todosActions.setTodoDone(todo.id));

    }

    setDeleteTodo(todo: Todo){
        store.dispatch(todosActions.setDeleteTodo(todo));
    }

    // getAllTodos(){
    //     const responce = await <any>http.get(url, {
    //         apikey: omdApKey,
    //         s: name,
    //         page
    //     });

    //     if(responce){
    //         store.dispatch(todosActions.setNewTodo({
    //             id: responce.id,
    //             description: responce.description,
    //         }))
    //     }
    // }
}