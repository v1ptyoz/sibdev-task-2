import "./Favorites.css";
import { Typography } from 'antd';
import FavoriteItem from "../../components/FavoriteItem";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const { Title } = Typography;

export function Favorites() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const favorites = useSelector(state => state.favorites.list);

  return isLoggedIn ? (
    <div className="favorites">
      <div className="container">
        <Title level={3} style={{ marginBottom: "40px" }}>Избранное</Title>
        <ul className="favorites__list">
          {favorites.map(item => {
            return (
              <li key={item.query}>
                <FavoriteItem query={item.query} deep={item.deep} sortBy={item.sortBy} name={item.name} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  ) : (
    <Navigate to="login" />
  )
}