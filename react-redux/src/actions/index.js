import axios from "axios";

export const FETCH_DOG_START = "FETCH_DOG_START";
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";

export const getDogImage = () => dispatch => {
    axios 
        .get('https://dog.ceo/api/breeds/image/random')
        .then((res)=>{
            console.log(res);
            dispatch({ type: FETCH_DOG_SUCCESS, payload: res.data.message});
        })
        .catch(err => {
            dispatch({ type: FETCH_DOG_FAIL, payload: err });
        });
}
