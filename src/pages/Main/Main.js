import { Layout } from 'antd';
import SiteHeader from '../../components/SiteHeader';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadFavorites } from '../../api/loadFavorites';
const { Content } = Layout;

export function Main() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const name = useSelector(state => state.user.username)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites(name));
  }, [])

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