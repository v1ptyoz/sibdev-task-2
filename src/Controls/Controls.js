import "./Controls.css";
import { Button } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

export function Controls() {
  return (
    <div className="container">
          <div className="result__controls controls">
        <div className="controls__info">
          <p>Видео по запросу «<strong>чем кормить кота</strong>»</p>
          <span>1234</span>
        </div>
        <div className="controls__sort">
          <Button type="text" style={{color: "#BBBBBB"}}>
            <UnorderedListOutlined />
          </Button>
          <Button type="text">
            <AppstoreOutlined />
          </Button>
        </div>
      </div>
    </div>
  )
}