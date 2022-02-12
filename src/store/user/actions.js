export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";

export const SetLoading = () => ({
  type: SET_LOADING
})

export const SetError = (payload) => ({
  type: SET_ERROR,
  payload: payload,
})

export const Login = (payload) => ({
  type: LOGIN,
  payload: payload
})