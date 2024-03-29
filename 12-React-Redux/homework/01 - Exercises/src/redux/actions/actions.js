import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME} from './types';
import axios from 'axios';



export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    };
}

export const getStoreName = () => {
return async function (dispatch) {
try {
    let response = await axios.get('http://localhost:3001/store');
   return dispatch({ type: GET_STORE_NAME, payload: response.data.name });
} catch (error) {
    console.log(error);
}
}

//************************************** */
// //Peticion con fecth
// fetch("http://localhost:3001/store")
//     .then((response) => response.json())
//     .then((data) => dispatch({ type: GET_STORE_NAME, payload: data.name }))

// //Peticion con axios
// axios.get("http://localhost:3001/store")
// then((data) => dispatch({ type: GET_STORE_NAME, payload: data.data })) // axios me ahorra la conversion a json pero me trae la data en data.data


}

