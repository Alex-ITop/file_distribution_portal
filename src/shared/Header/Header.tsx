import React from 'react';
import { Layout, Space } from 'antd';
import './index.css'

interface IHeaderComponent {
  header: React.ReactNode;
}

const HeaderComponent: React.FC<IHeaderComponent> = ({ header }) => {
  const { Header } = Layout;
  return (
    <Header className="header-container">
      <Space className="header-space">
        <div>{header}</div>
      </Space>
    </Header>
  )
};

export default HeaderComponent;