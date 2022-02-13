import "./Controls.css";
import { Button } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

export function Controls({grid, setGrid}) {
  const query = useSelector(state => state.videos.query);
  const count = useSelector(state => state.videos.list.length);

  return (
    <div className="container">
          <div className="result__controls controls">
        <div className="controls__info">
          <p>Видео по запросу «<strong>{query}</strong>»</p>
          <span>{count}</span>
        </div>
        <div className="controls__sort">
          <Button type="text" style={grid ? {color: "#BBBBBB"} : {}} onClick={() => setGrid(false)}>
            <UnorderedListOutlined />
          </Button>
          <Button type="text" style={!grid ? {color: "#BBBBBB"} : {}} onClick={() => setGrid(true)}>
            <AppstoreOutlined />
          </Button>
        </div>
      </div>
    </div>
  )
}