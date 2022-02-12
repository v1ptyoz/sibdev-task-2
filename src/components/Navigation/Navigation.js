import "./Navigation.css"
import { Menu, } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { useDispatch } from "react-redux";
import { Logout } from "../../store/user/actions";

const items = [
  {
    name: "Поиск",
    path: "search"
  },
  {
    name: "Избранное",
    path: "favorites"
  }
]


export function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function logout() {
    dispatch(Logout());
    navigate("/login", { replace: true });
  }

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <Logo />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="navigation__menu">
        {items.map((item, index) => {
          const key = index + 1;
          return <Menu.Item key={key} onClick={() => navigate(item.path)}>{item.name}</Menu.Item>;
        })}
        <Menu.Item key={items.length + 1} style={{ marginLeft: "auto" }} onClick={logout}>Выйти</Menu.Item>
      </Menu>
    </div>
  )
}