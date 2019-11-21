const INITIAL_STATE = {
    allpurchases: []
}

const allpurchases = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALLPURCHASES':
            return {
                ...state,
                allpurchases: action.payload.allpurchases
            }
        default:
            return state;
    }
}
export default allpurchases;