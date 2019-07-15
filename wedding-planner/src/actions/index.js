
import { customAuth } from '../utils/authenticator';





export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return customAuth()
    .post('https://wedding-planner-build-week.herokuapp.com/auth/login', creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.authToken);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  customAuth()
    .get("http://localhost:8000/api/services")
    .then(res => { 
        console.log("actions log :", res.data)
 dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};


export const FETCH_SERVICE_START = 'FETCH_SERVICE_START';
export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
export const FETCH_SERVICE_FAILURE = 'FETCH_SERVICE_FAILURE';
export const getService = (service) => dispatch => {
    dispatch({ type: FETCH_SERVICE_START });
    customAuth()
        .post("http://localhost:8000/api/services", service)

        .then(res => { 
            console.log("actions log for adding a friend :", res.data)
     dispatch({ type: FETCH_SERVICE_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err.response);
          dispatch({ type: FETCH_SERVICE_FAILURE, payload: err.response.data.error });
        });
    };


    export const DELETE_SERVICE_START = 'DELETE_SERVICE_START';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_FAILURE = 'DELETE_SERVICE_FAILURE';
export const deleteService = (id) => dispatch => {
  
    dispatch({ type: DELETE_SERVICE_START });
    customAuth()
        .delete(`http://localhost:8000/api/services/${id}`)
        .then(res => { 
            console.log("actions log :",res.data)
            
     dispatch({ type: DELETE_SERVICE_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err.response);
          dispatch({ type: DELETE_SERVICE_FAILURE, payload: err.response.data.error });
        });
    };

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return customAuth()
    .post('https://wedding-planner-build-week.herokuapp.com/auth/register', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};
