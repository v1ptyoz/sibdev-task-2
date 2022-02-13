export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const UPDATE_FAVORITE = "UPDATE_FAVORITE";
export const SAVE_FAVORITES = "SAVE_FAVORITES";
export const LOAD_FAVORITES = "LOAD_FAVORITES";

export const SetLoading = () => ({
  type: SET_LOADING
})

export const SetError = (payload) => ({
  type: SET_ERROR,
  payload: payload,
})

export const AddFavorite = (payload) => ({
  type: ADD_FAVORITE,
  payload: payload
})

export const UpdateFavorite = (payload) => ({
  type: UPDATE_FAVORITE,
  payload: payload,
})

export const SaveFavorites = () => ({
  type: SAVE_FAVORITES,
})

export const LoadFavorites = (payload) => ({
  type: LOAD_FAVORITES,
  payload: payload,
})