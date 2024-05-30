
import React from 'react';
import {
  Typography,
  Button,
  Divider,
  Space
} from 'antd';
import { IFolder } from '../../types';
import File from '../File'

export const Folder: React.FC<IFolder> = props => {
  const { Title, Paragraph } = Typography;
  const { name, description, files } = props;
  return (
    <div>
      {name && (
        <>
          <Title className='title-files-system '>{ name }</Title>
          <Divider className='divider' />
        </>
      )}
      {description && (
        <>
        <div className='top-paragraph-files-commentary'>
          <Paragraph className='paragraph-files-commentary'>
            { description }
          </Paragraph>
          </div>
          <Divider className='divider' />
        </>
        )}
          <Space direction='vertical' className='files-divider-space'>
            {files.length && files.map(({id, name, type, tag}) => (
              <File
                key={id}
                id={id}
                name={name}
                type={type}
                tag={tag}
              />
            ))}
          </Space>
          <Divider className='divider' />
          <div className='button'>
            <div>
            </div>
            <div>
              <Button>Загрузить одним архивом</Button>
            </div>
          </div>
        </div>
  )
}