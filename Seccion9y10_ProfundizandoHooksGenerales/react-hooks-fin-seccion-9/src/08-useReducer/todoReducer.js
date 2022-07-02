export const todoReducer = ( initialSate = [], action ) => {
  
    switch (action.type) {
        
        case '[TODO] Add todo' :
            return [ ...initialSate, action.payLoad ];

        case '[TODO] Remove todo' :
            return initialSate.filter(elemento => elemento.id !== action.payLoad);

        case '[TODO] Modify todo' :
            return initialSate.map( elemento => {
                if(elemento.id === action.payLoad) {
                    return {
                        ...elemento,
                        done : !elemento.done   
                    }
                }
                return elemento;
            })

        default:
            return initialSate;
    }
}
