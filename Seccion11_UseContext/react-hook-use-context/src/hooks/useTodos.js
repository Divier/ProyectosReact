import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)); //Recordar q el localStorage guarda solos strings.
    }, [todos])    

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add todo',
            payLoad: todo
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type:'[TODO] Remove todo',
            payLoad: id
        }
        dispatch(action);
    }

    const handelModifyTodo = (id) => {
        dispatch({
            type:'[TODO] Modify todo',
            payLoad: id
        });
    }

    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handelModifyTodo,
        counterTodo: todos.length,
        counterPendingTodo: todos.filter(todo => !todo.done).length
    }
}
