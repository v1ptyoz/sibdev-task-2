import axios from "axios";
import { SetLoading, SetError, Login } from "../store/user/actions";

export function auth({ login, password }) {
  return async function (dispatch) {
    
    let isLoggedIn = false;

    dispatch(SetLoading());

    try {
      const { data } = await axios("fakeUsers.json");
      data.forEach(user => {
        if (user.name === login && user.password === password) {
          isLoggedIn = true;
          dispatch(Login({token: user.token, username: user.name}));
        }
      })

      if (!isLoggedIn) {
        dispatch(SetError("Пользователь с такими данными не найден"))
      }

    } catch (e) {
      dispatch(SetError("Произошла ошибка авторизации"));
    }
  }
}