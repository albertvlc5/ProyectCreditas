import axios from 'axios';

const getProductByPopular = () => (dispatch) => {
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

export default getProductByPopular;