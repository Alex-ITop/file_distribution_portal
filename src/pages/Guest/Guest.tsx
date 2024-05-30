import React from 'react';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserSpace } from './store';
import { EllipsisOutlined } from '@ant-design/icons';
import { Typography, Space, Tag, Divider, Dropdown } from 'antd';
import Folder from './components/Folder';
import './index.css'
import { Scope } from './components/Scope';

const Guest: React.FC = () => {
  const { Paragraph } = Typography;
  const {
    scope,
    folders,
    versionsNumbers,
    fetchSpace 
  } = useUserSpace(state => state, shallow);
  useEffect(() => { fetchSpace() }, []);

  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide);
  // };

  console.log(versionsNumbers);

  const defaultVersionNumber =  versionsNumbers.length ? versionsNumbers[0].label : '';
  const defaultVersionDate = versionsNumbers.length ? new Date(versionsNumbers[0].dateOfPublication).toLocaleDateString() : '';

  return (
    <Space direction='vertical' className='content'>
      <Scope name={scope.name} />
      {/* {scope.images.length && (
        <div className='top-carousel'>
          <div className='carousel'>
            <Carousel afterChange={onChange}>
              <div>
                <img src={scope?.images[0]} alt="" />
              </div>
              <div>
                <img src={scope?.images[1]} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      )} */}
      

      <div className='versions-tags-box'>
        <Tag bordered={false} className='gray-tag'>текущая версия</Tag>

        <Space size={[0, 'small']} wrap>
          <Tag bordered={false} className='lime-tag'>
            <Space split={<Divider className='gray-divider' type='vertical' />} style={{ gap: '0px' }}>
              <div>{defaultVersionNumber}</div>
              <Dropdown
                menu={{ items: versionsNumbers }} 
                placement="bottom" 
                arrow={{ pointAtCenter: true }}
              >
                <EllipsisOutlined className='dots' />
              </Dropdown>

            </Space>
          </Tag>
          <Space className='tags-separator'>
            <Tag className='date-tag'>дата</Tag>
            <Tag className='blue-tag'>{ defaultVersionDate }</Tag>
          </Space>

        </Space>
      </div >
      <div className='commentaries-box '>
        <Paragraph className='paragraph-scope-commentary'>
          { scope.description }
        </Paragraph>
      </div>
      <div className='files-components'>
        {folders && folders.map((folder) => (
          <Folder 
            key={folder.id}
            name={folder.name}
            id={folder.id}
            files={folder?.versions && folder?.versions.length ? folder.versions[0].files : []}
          />
        ))}
      </div>
    </Space >

  );
}

export default Guest;