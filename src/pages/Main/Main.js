import { Layout } from 'antd';
import SiteHeader from '../../components/SiteHeader';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const { Content } = Layout;

export function Main() {
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() =>{
    if (location.pathname === "/")
     navigate("search")
  }, [])

  return (
    <>
      <SiteHeader />
      <Content style={{ width: '100%', height: '100%', background: '#FAFAFA' }}>
        <Outlet />
      </Content>
    </>
  )
}