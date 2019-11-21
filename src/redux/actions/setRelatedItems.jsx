import axios from 'axios';

const setRelatedItems = (category,id) => (dispatch) => {
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

export default setRelatedItems;