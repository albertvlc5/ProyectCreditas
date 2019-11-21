import axios from 'axios';

export const setProductByName = (name) => (dispatch) => {
    axios.post(`http://localhost:8080/api/v1/productos/nombre/`, {
      name:name,
    })
        .then(res => {
            //console.log("EH SOY EL RES DE AHORA "+res.data)
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
            console.log(res);
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
            console.log(res);
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
           /*  console.log("VOY a pintar el res")
            console.log(res);
            console.log("VOY a pintar el res.data")
            console.log(res.data); */
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




