import axios from 'axios';

const setProductById = (id) => (dispatch) => {
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

export default setProductById;