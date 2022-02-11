import { Layout } from 'antd';
import Search from '../Search';
import SiteHeader from '../../components/SiteHeader';

const { Content } = Layout;

export function Main() {
  return (
    <>
      <SiteHeader />
      <Content style={{ width: '100%', height: '100%', background: '#FAFAFA' }}>
        <Search />
      </Content>
    </>
  )
}