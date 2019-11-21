const INITIAL_STATE = {
    token: ""
}

const token = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGGIN':
            return {
                ...state,
                token: action.payload.token,
            }

        case 'LOGOUT':
            return {
                ...state,
                token: action.payload.token
            }
        default:
            return state;

    }
}
export default token;