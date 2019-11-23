const INITIAL_STATE = {
    consulta: null,
}

const consulta = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONSULTA':
            return {
                ...state,
                consulta: action.payload.consulta,
            }
        default:
            return state;

    }
}
export default consulta;