const INITIAL_STATE = {
    control: 0
}

const control = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONTROL':
            return {
                ...state,
                control: action.payload.control,
            }

        default:
            return state;

    }
}
export default control;