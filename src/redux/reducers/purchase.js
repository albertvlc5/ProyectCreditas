const INITIAL_STATE = {
    purchase: []
}

const purchase = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POSTPURCHASE':
            return {
                ...state,
                purchase: action.payload.purchase
            }
        default:
            return state;
    }
}
export default purchase;