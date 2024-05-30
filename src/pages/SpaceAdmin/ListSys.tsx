import React from 'react';
import { List } from 'antd';
import './index.css';

const data = [
  'Linux',
  'Windows Server',
  '...',
  '...',
];

const data_vers = [
  '1.07.09',
  '1.07.08',
  '1.07.07',
  '1.07.06',
  '1.07.05',
  '1.07.04',
  '1.07.03',
];

  const ListSys: React.FC = () => (
    <>
      <List
        size="small"
        bordered
        dataSource={data_vers}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      
    </>
  );

export default ListSys;
