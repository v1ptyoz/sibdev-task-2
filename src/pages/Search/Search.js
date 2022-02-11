import "./Search.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';

const { Title } = Typography;

export function Search() {
  return (
    <div className="search">
      <div className="container">
        <SearchForm>
          <Title level={1} style={{ textAlign: "center", marginBottom: "40px" }}>Поиск видео</Title>
        </SearchForm>
      </div>
    </div>
  )
}