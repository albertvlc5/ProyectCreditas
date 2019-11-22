const INITIAL_STATE = {
    oneproduct: null,
    relateditems: null,
}

const oneproduct = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ONE_PRODUCT':
            return {
                ...state,
                oneproduct: action.payload.oneproduct,
                relateditems: null
            }
        case 'RELATEDITEMS':
            return {
                ...state,
                relateditems: action.payload.relateditems
            }
        default:
            return state;
    }
}
export default oneproduct;