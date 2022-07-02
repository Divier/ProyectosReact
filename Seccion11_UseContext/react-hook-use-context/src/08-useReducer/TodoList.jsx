import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, removeTodo, modifyTodo }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem key={ todo.id } todo={ todo } removeTodo={ removeTodo } modifyTodo={ modifyTodo }/>
                ))
            }
        </ul>
    )
}
