const INITIAL_STATE = {
    lastpurchase: []
}

const lastpurchase = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LAST_PURCHASE':
            return {
                ...state,
                lastpurchase: action.payload.lastpurchase
            }
        default:
            return state;
    }
}
export default lastpurchase;