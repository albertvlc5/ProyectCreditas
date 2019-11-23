const INITIAL_STATE = {
    products: null,
    itemsPerPage: null,
    page: null,
    totalItemsCount: null,
    category: null,
}

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload.products,
                itemsPerPage: action.payload.itemsPerPage,
                page: action.payload.page,
                totalItemsCount: action.payload.totalItemsCount,
                category: action.payload.category,
            }
        default:
            return state;
    }
}
export default products;