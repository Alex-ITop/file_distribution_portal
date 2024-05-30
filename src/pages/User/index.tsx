import { Space, Typography } from 'antd';
import './index.css';

export const User = () => {
  const { Paragraph } = Typography;
  const myData = 'Вот тут много пишу всякого. Вот тут много пишу всякого.';
  return (
    <div className="user-container">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Paragraph>
          {myData}
        </Paragraph>
      </Space>
    </div>
  )
};