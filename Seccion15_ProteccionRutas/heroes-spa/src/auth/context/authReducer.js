import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  
    switch (action.type) {
        case types.typeLogin:
            return {
                logged: true,
                user: action.payload
            }
    
        case types.typeLogout:
            return {
                logged: false
            }

        default:
            return state;
    }
}
