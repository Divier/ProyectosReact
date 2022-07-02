import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');//Importante incializar el useSate

    const onInputChange = (target) => {
        setInputValue(target.value);
        console.log('Se disparo onChange');
    }

    const onSubmit = (event) => {
        event.preventDefault() //Para no enviar el formulario;
        const value = inputValue.trim();
        if(value.length < 1) {
            return;
        }
        setInputValue('');
        onNewCategory( value );
        console.log('Se disparo onSubmit');
    }

    return (
        /*Se deja en la Forma corta, podria ser event=>onSubmit(event) }*/
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ event => { onInputChange(event.target) } }
            />
        </form>
    )
}