import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import products from './reducers/products';
import token from './reducers/token';
import user from './reducers/user';
import id from './reducers/id';
import purchase from './reducers/purchase';
import lastpurchase from './reducers/lastpurchase';
import oneproduct from './reducers/oneproduct';
import allpurchases from './reducers/allpurchases';
import metodo from './reducers/metodo';
import consulta from './reducers/consulta';

const reducer = combineReducers({
    products,
    token,
    user,
    id,
    oneproduct,
    purchase,
    lastpurchase,
    allpurchases,
    metodo,
    consulta

})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token', 'id']
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;