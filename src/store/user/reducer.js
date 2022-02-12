import { SET_LOADING, SET_ERROR, LOGIN } from "./actions";

const initState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  username: null,
  loading: false,
  error: null
 };
 
const user = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN:
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("username", action.payload.username)
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
        loading: false
      }
    default: return state;
  }
 }

 export default user;