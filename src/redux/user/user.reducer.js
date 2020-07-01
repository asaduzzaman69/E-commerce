import { userActionTypes } from './user.type'

const InitialState = {
    currentUser:null
}



const UserReducer = (state = InitialState, action ) => {

    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
            default: 
            return state;
    }
}
export default UserReducer;