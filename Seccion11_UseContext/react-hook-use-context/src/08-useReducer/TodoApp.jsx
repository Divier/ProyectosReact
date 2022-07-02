import { useTodo } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const { todos, handleNewTodo, handleRemoveTodo, handelModifyTodo, counterTodo, counterPendingTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: {counterTodo}, Pendientes: {counterPendingTodo}</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <TodoList todos={ todos } removeTodo={ handleRemoveTodo } modifyTodo= { handelModifyTodo } />
                </div>

                <div className="col-6">
                    <h3>Agregar Todo</h3>
                    <hr />
                    <TodoAdd onNewTodo={ (todo) => handleNewTodo(todo) } />
                </div>
            </div>
        </>
    )
}
