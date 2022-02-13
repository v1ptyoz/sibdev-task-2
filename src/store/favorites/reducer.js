import { SET_LOADING, SET_ERROR, ADD_FAVORITE, UPDATE_FAVORITE, LOAD_FAVORITES } from "./actions";

const initState = {
  list: [],
  loading: false,
  error: null
};

const favorites = (state = initState, action) => {
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
    case ADD_FAVORITE:
      return {
        ...state,
        loading: false,
        list: [...state.list, { query: action.payload.query, deep: 12, name: "", sortBy: "" }]
      }
    case UPDATE_FAVORITE:
      const {name, sortBy, deep} = action.payload;
      state.list.forEach(favorite => {
        if (favorite.query === action.payload.query) {
          favorite.name = name;
          favorite.sortBy = sortBy;
          favorite.deep = deep;
        }
      })
      return {
        ...state,
        loading: false,
      }
    case LOAD_FAVORITES:
      return {
        ...state,
        list: [...action.payload],
        loading: false
      }
    default: return state;
  }
}

export default favorites;