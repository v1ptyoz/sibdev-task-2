import "./SearchForm.css"
import { Form, Input, Button, Typography } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

const { Title } = Typography;

export function SearchForm(props) {
  return (
    <div className="search-form">
      <div className="container">
        <Title level={1} style={{textAlign: "center", marginBottom: "40px"}}>Поиск видео</Title>
        <Form layout="inline" style={{width: "60%", flexWrap: "nowrap", margin: "0 auto"}}>
          <Form.Item name="search" style={{width: "100%", marginRight: "0"}} >
            <Input 
            placeholder="Что хотите посмотреть?"
            suffix={props.withIcon && (
              props.inFavorite ? <HeartTwoTone /> : <HeartOutlined />)}
            >
              
            </Input>
          </Form.Item>
          <Button type="primary" htmlType="submit">Найти</Button>
        </Form>
      </div>
    </div>
  )
}