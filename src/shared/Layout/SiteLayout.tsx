import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Space } from 'antd';
import HeaderComponent from '../Header/Header';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 64px)',
  backgroundColor: '#fff',
};

interface ISiteLayout {
  header: React.ReactNode;
}

const SiteLayout: React.FC<ISiteLayout> = ({ header }) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <HeaderComponent header={header} />
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  </Space>
);

export default SiteLayout;
