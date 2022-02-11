import "./LoginForm.css"
import Logo from "../Logo";
import { Form, Input, Button, Row, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Title } = Typography;

export function LoginForm() {
  return (
    <Form className="login-form">
      <Row justify="center" align="middle">
        <Logo />
      </Row>
      <Row justify="center" align="middle">
        <Title level={4}>Войти</Title>
      </Row >
      <Row justify="center" align="middle">
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Введите логин' }]}
          style={{ width: "100%" }}
        >
          <Input placeholder="Логин" />
        </Form.Item>
      </Row>
      <Row justify="center" align="middle">
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
          style={{ width: "100%" }}
        >
          <Input.Password
            placeholder="Пароль"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
      </Row>
      <Row justify="center" align="middle">
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Row>

    </Form>
  )
}