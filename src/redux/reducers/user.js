const INITIAL_STATE = {
    user: ""
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state;

    }
}
export default user;