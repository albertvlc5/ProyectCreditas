import axios from 'axios';
/* 
const getProductByName = (name) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/productos/${name}`)
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

export default getProductByName; */

const getProductByName = (name) => (dispatch) => {
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

export default getProductByName;


