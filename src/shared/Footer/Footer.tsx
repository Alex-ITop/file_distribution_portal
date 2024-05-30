import React from 'react';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const nameStyle: React.CSSProperties = {
    textAlign: 'left',
};

const docStyle: React.CSSProperties = {
    textAlign: 'end',
};

const footerStyle: React.CSSProperties = {
    width: '100%',
    justifyContent: 'space-between',
    color: '#57606A',
    fontSize: '12',
    padding: '10px'
}

const Footer: React.FC = () => (
    <Space direction="horizontal" style={footerStyle}>
        <Text style={nameStyle}>
            (c) Parma TG, 2023
        </Text>
        <Text style={docStyle}>
            Соглашение о распространении
        </Text>
    </Space>
);

export default Footer;