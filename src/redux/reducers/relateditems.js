const INITIAL_STATE = {
    relateditems: []
}

const relateditems = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'RELATEDITEMS':
            return {
                ...state,
                relateditems: action.payload.relateditems
            }
        default:
            return state;
    }
}
export default relateditems;