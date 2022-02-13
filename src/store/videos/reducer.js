import { SET_LOADING, SET_VIDEOS } from "./actions";

const initState = {
  loading: false,
  query: "",
  list: []
 };

 const videos = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_VIDEOS:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        query: action.payload.query,
      }
    default: return state;
  }
 }

 export default videos;