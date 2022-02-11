import "./SearchForm.css"
import { Form, Input, Button } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

export function SearchForm(props) {
  return (
    <div className="search-form">
      {props.children}
      <Form layout="inline" className="search-form__form">
        <Form.Item name="search" style={{ width: "100%", marginRight: "0", flex: "1" }} >
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
  )
}