import React from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../hooks/useAction';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../store/reducers/todos.reducer';
import todoSelector from '../../store/selectors/todo.selectors';


const TodoPanel = () =>{
    const todoActions = useAction(TodoService);
    const todos = useSelector(todoSelector.getAll);

    React.useEffect(() => {
        
        todoActions.setNewTodo(
            {
                id: 123,
                label: 'testowyLabel',
                done: false,
                description: 'pierwszy wpis',
            }
        );
         
    }, []);

    const deleteTodo = (todo: Todo) => {
        todoActions.setDeleteTodo(todo);
    }
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <button onClick={() => deleteTodo(todo)}>Remove</button>
                    <p>{todo.label}</p>
                    <p>{todo.done}</p>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    );

}

export default TodoPanel;

// function setNewTodo(arg0: { id: number; label: string; done: boolean; description: string; }): any {
//     throw new Error('Function not implemented.');
// }


            