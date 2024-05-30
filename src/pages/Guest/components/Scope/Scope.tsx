import React from 'react';
import { Image, Typography, Divider } from 'antd';

const defaultImage = '/src/pages/Guest/static/badge.svg';

interface IScopeProps {
  name: string;
  link?: string;
}

export const Scope: React.FC<IScopeProps> = ({ name, link = defaultImage }) => {
  const { Title } = Typography;
  return (
    <>
      <div className='badge'>
          <Image
            preview={false}
            src={link}
          />
          <div className='top-title'>
            <Title className='title-company-name'>{name}</Title>
          </div>
      </div>
      <Divider className='divider' />
    </>
  )
}