import axios from 'axios';

export const setProductByName = (name) => (dispatch) => {
    axios.post(`http://localhost:8080/api/v1/productos/nombre/`, {
      name:name,
    })
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setProductByPopular = () => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/popular/`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setProductByCategory = (category) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/category/${category}`)
        .then(res => {
            dispatch({
                type: 'ALL_PRODUCTS',
                payload: {
                    products: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const setProductById = (id) => (dispatch) => {
    return axios.get(`http://localhost:8080/api/v1/productos/details/${id}`,)
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

export const setRelatedItems = (category,id) => (dispatch) => {
    return axios.get(`http://localhost:8080/api/v1/productos/related/${category}/${id}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: 'RELATEDITEMS',
                payload: {
                    relateditems: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const dimecontrol = (aux) => (dispatch) => {
    dispatch({
        type: 'CONTROL',
        payload: {
            control: aux
        }
    })
}




