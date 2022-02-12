import "./Results.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';
import Controls from "../../components/Controls";
import Cards from "../../components/Cards";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const { Title } = Typography;

export function Results() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return isLoggedIn ? (
    <div className="container">
      <div className="results">
        <SearchForm withIcon={true}>
          <Title level={3}>Поиск видео</Title>
        </SearchForm>
        <Controls />
        <Cards grid={true}/>
      </div>
    </div>
  ) : (
    <Navigate to="login" />
  )
}