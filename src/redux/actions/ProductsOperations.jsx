import axios from 'axios';

export const setProductByName = (name, page = 0) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/nombre/${name}?page=${page}`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data.content,
                    page: res.data.pageable.pageNumber + 1,
                    itemsPerPage: res.data.size,
                    totalItemsCount: res.data.totalElements,

                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setProductByCategory = (category, page = 0) => (dispatch) => {

    axios.get(`http://localhost:8080/api/v1/productos/category/${category}?page=${page}`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data.content,
                    page: res.data.pageable.pageNumber + 1,
                    itemsPerPage: res.data.size,
                    totalItemsCount: res.data.totalElements,
                    category: res.data.content[0].category
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setAllProducts = (page = 0) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/?page=${page}`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data.content,
                    page: res.data.pageable.pageNumber + 1,
                    itemsPerPage: res.data.size,
                    totalItemsCount: res.data.totalElements,
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setProductByPopular = (page = 0) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/popular/?page=${page}`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data.content,
                    page: res.data.pageable.pageNumber + 1,
                    itemsPerPage: res.data.size,
                    totalItemsCount: res.data.totalElements,
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};



export const setProductById = (id) => (dispatch) => {
    return axios.get(`http://localhost:8080/api/v1/productos/details/${id}`)
        .then(res => {
            dispatch({
                type: 'ONE_PRODUCT',
                payload: {
                    oneproduct: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setRelatedItems = (category, id) => (dispatch) => {
    return axios.get(`http://localhost:8080/api/v1/productos/related/${category}/${id}`)
        .then(res => {
            dispatch({
                type: 'RELATEDITEMS',
                payload: {
                    relateditems: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const dimemetodo = (aux) => (dispatch) => {
    dispatch({
        type: 'METODO',
        payload: {
            metodo: aux
        }
    })
}

export const dimeconsulta = (aux) => (dispatch) => {
    dispatch({
        type: 'CONSULTA',
        payload: {
            consulta: aux
        }
    })
}




