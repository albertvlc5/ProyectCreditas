const INITIAL_STATE = {
    oneproduct: null,
}

const oneproduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ONE_PRODUCT':
            return {
                ...state,
                oneproduct: action.payload.oneproduct
            }
        default:
            return state;
    }
}
export default oneproduct;