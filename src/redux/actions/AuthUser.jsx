import axios from 'axios';

export const postUser = async (username, password) => {
    try {
        return await axios.post(`http://localhost:8080/api/v1/auth`, {
            username: username,
            password: password
        })
    } catch{
        console.error("error");
    }

}

export const postRegister = async (username, password) => {
    try {
        return await axios.post(`http://localhost:8080/api/v1/register`, {
            username: username,
            password: password
        })
    } catch{
        console.error("error");
    }

}

export const dimetoken = (aux) => (dispatch) => {
    dispatch({
        type: 'LOGGIN',
        payload: {
            token: aux
        }
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT',
        payload: {
            token: "",
        }
    })

};

export const dimeuser = (aux) => (dispatch) => {
    dispatch({
        type: 'USER',
        payload: {
            user: aux
        }
    })
}

export const dimeid = (username, password) => (dispatch) => {
    axios.post(`http://localhost:8080/api/v1/id`, {
        username: username,
        password: password
    })
        .then(res => {
            dispatch({
                type: 'ID',
                payload: {
                    id: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
};

export const purchase = (user_id, product_id) => (dispatch) => {
    return axios.post(`http://localhost:8080/api/v1/purchase/`, {

        user: {
            id: user_id
        },
        product: {
            id: product_id
        }

    })
        .then(res => {
            dispatch({
                type: 'POSTPURCHASE',
                payload: {
                    purchase: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
}

export const dimeultimo = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/purchase/lastpurchase/${id}`,
    )
        .then(res => {
            dispatch({
                type: 'LAST_PURCHASE',
                payload: {
                    lastpurchase: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
}

export const dimecompras = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/api/v1/purchase/getall/${id}`,
    )
        .then(res => {
            dispatch({
                type: 'ALLPURCHASES',
                payload: {
                    allpurchases: res.data
                }
            })
        })
        .catch(error => { console.log(`Error: ${error}`) });
}

