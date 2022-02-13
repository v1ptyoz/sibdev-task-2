import { LoadFavorites } from "../store/favorites/actions";

export const loadFavorites = (name) => {
  return (dispatch) => {
    const JSONFavorites = localStorage.getItem(name);
    if (JSONFavorites) {
      const favorites = JSON.parse(JSONFavorites);
      dispatch(LoadFavorites(favorites));
    } else {
      dispatch(LoadFavorites([]))
    }
  }
}