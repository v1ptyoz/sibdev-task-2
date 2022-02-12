import { Layout } from 'antd';
import SiteHeader from '../../components/SiteHeader';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const { Content } = Layout;

export function Main() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);


  return isLoggedIn ? (
    <>
      <SiteHeader />
      <Content style={{ width: '100%', height: '100%', background: '#FAFAFA' }}>
        <Outlet />
      </Content>
    </>
  ) : (
    <Navigate to="login" />
  )
}