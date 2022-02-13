import "./Results.css"
import SearchForm from "../../components/SearchForm";
import { Typography } from 'antd';
import Controls from "../../components/Controls";
import Cards from "../../components/Cards";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const { Title } = Typography;

export function Results() {
  const results = useSelector(state => state.videos.list);
  const [grid, setGrid] = useState(false)

  return results.length !== 0 ? (
    <div className="container">
      <div className="results">
        <SearchForm withIcon={true}>
          <Title level={3}>Поиск видео</Title>
        </SearchForm>
        <Controls grid={grid} setGrid={setGrid}/>
        <Cards grid={grid}/>
      </div>
    </div>
  ) : (
    <Navigate to="/search" />
  )
}