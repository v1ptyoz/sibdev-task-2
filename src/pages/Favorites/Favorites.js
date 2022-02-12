import "./Favorites.css";
import { Typography } from 'antd';
import FavoriteItem from "../../components/FavoriteItem";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const { Title } = Typography;

export function Favorites() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn ? (
    <div className="favorites">
      <div className="container">
        <Title level={3} style={{ marginBottom: "40px" }}>Избранное</Title>
        <ul className="favorites__list">
          <li>
            <FavoriteItem />
          </li>
          <li>
            <FavoriteItem />
          </li>
          <li>
            <FavoriteItem />
          </li>
          <li>
            <FavoriteItem />
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <Navigate to="login" />
  )
}