import "./LoginForm.css"
import Logo from "../Logo";
import { Form, Input, Button, Row, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { auth } from "../../api/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export function LoginForm() {

  const loading = useSelector(state => state.user.loading)
  const error = useSelector(state => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({login, password}) => {
    await dispatch(auth({login, password}));
    navigate("/search", { replace: true });
  }

  return (
    <Form className="login-form" onFinish={login} style={{width: "400px", height: "420px"}}>
      <Row justify="center" align="middle">
        <Logo />
      </Row>
      <Row justify="center" align="middle">
        <Title level={4}>Войти</Title>
      </Row >
      <Row justify="center" align="middle">
        <Form.Item
          name="login"
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
        {error && <p style={{color: "red", fontSize: "12px", display: "inline"}}>{error}</p>}
      </Row>
      <Row justify="center" align="middle">
        <Button type="primary" htmlType="submit" loading={!!loading}>
          Войти
        </Button>
      </Row>
    </Form>
  )
}