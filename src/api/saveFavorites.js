import { SaveFavorites } from "../store/favorites/actions";
export const saveFavorites = () => {
  return (dispatch, getState) => {
    const state = getState();
    const name = state.user.username;
    const favorites = JSON.stringify(state.favorites.list);

    localStorage.setItem(name, favorites);
    dispatch(SaveFavorites());
  }
}