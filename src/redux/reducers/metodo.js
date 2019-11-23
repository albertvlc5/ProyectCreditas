const INITIAL_STATE = {
    metodo: null,
}

const metodo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'METODO':
            return {
                ...state,
                metodo: action.payload.metodo,
            }
        default:
            return state;

    }
}
export default metodo;