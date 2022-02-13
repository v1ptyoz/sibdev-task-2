import "./Login.css"
import { Row, Col } from 'antd';
import LoginForm from '../../components/LoginForm';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export function Login() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return !isLoggedIn ? (
    <div className="login">
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </div>
  ) : (
    <Navigate to="/search" />
  )
}