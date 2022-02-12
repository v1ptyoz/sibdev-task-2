import "./Search.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const { Title } = Typography;

export function Search() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn ? (
    <div className="search">
      <div className="container">
        <SearchForm>
          <Title level={1} style={{ textAlign: "center", marginBottom: "40px" }}>Поиск видео</Title>
        </SearchForm>
      </div>
    </div>
  ) : (
    <Navigate to="login" />
  )
}