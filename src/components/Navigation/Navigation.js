import "./Navigation.css"
import { Menu, } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const items = [
  {
    name: "Поиск",
    path: "/"
  },
  {
    name: "Избранное",
    path: "favorites"
  }
]


export function Navigation() {
  const navigate = useNavigate();
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
        <Menu.Item style={{ marginLeft: "auto" }}>Выйти</Menu.Item>
      </Menu>
    </div>
  )
}