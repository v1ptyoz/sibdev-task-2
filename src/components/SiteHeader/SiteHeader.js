import "./SiteHeader.css";
import { Layout } from 'antd';
import Navigation from '../../components/Navigation';

const { Header } = Layout;

export function SiteHeader() {
  return (
    <Header style={{ background: '#FFFFFF' }}>
      <div className="container">
        <Navigation />
      </div>
    </Header>
  )
}