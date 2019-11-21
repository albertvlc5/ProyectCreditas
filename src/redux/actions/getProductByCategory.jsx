import axios from 'axios';

const getProductByCategory = (category) => (dispatch) => {
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

export default getProductByCategory;