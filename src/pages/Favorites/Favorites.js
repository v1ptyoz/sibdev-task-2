import "./Favorites.css";
import { Typography } from 'antd';
import FavoriteItem from "../../components/FavoriteItem";

const { Title } = Typography;

export function Favorites() {
  return (
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
  )
}