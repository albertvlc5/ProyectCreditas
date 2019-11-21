const INITIAL_STATE = {
    id: 0
}

const id = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ID':
            return {
                ...state,
                id: action.payload.id,
            }

        default:
            return state;

    }
}
export default id;