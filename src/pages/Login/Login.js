import "./Login.css"
import { Row, Col } from 'antd';
import LoginForm from '../../components/LoginForm';
export function Login() {
  return (
    <div className="login">
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </div>
  )
}