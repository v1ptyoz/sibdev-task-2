import "./Results.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';
import Controls from "../../Controls";

const { Title } = Typography;

export function Results() {
  return (
    <div className="container">
      <div className="results">
        <SearchForm withIcon={true}>
          <Title level={3}>Поиск видео</Title>
        </SearchForm>
        <Controls />
      </div>
    </div>
  )
}