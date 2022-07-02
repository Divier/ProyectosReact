import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const {descripcion, onInputChange, onResetForm} = useForm({ descripcion:'' });

    const onFormSubmit1 = (event) => {
        event.preventDefault();
        const valueTodo = event.target.addTodo.value;
        if(!validateForm(valueTodo)) {
            return;
        }
        const todo = {
            id: new Date().getTime() * 2,
            description: valueTodo,
            done: false
        }
        onNewTodo(todo);
    }

    const onFormSubmit2 = (event) => {
        event.preventDefault();
        if(!validateForm(descripcion)) {
            return;
        }
        const todo = {
            id: new Date().getTime() * 2,
            description: descripcion,
            done: false
        }
        onResetForm();
        onNewTodo(todo);
    }

    const validateForm = (value) => {
        return value && value.trim().length > 0; 
    }

    return (
        <>
            <form onSubmit = { event => onFormSubmit1(event) }>
                <input type="text" name="addTodo" placeholder="¿Que hay que hacer?" className="form-control"/>
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>
            <hr />
            {/* Usando el hook personalizado para manejo de formularios*/}
            <form onSubmit = { event => onFormSubmit2(event) }>
                <input type="text" name="descripcion" value={ descripcion } onChange={ onInputChange } placeholder="¿Que hay que hacer?" className="form-control"/>
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>
        </>
    )
}
