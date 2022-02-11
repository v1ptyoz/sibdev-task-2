import "./Results.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';
import Controls from "../../components/Controls";
import Cards from "../../components/Cards";

const { Title } = Typography;

export function Results() {
  return (
    <div className="container">
      <div className="results">
        <SearchForm withIcon={true}>
          <Title level={3}>Поиск видео</Title>
        </SearchForm>
        <Controls />
        <Cards grid={true}/>
      </div>
    </div>
  )
}