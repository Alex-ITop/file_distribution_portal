import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useTree } from './store';
import VersionTree from './VersionTree';
import EditVersion from './components/EditVersion';
import EditSpace from './components/EditSpace';
import EditSection from './components/EditSection';
import './index.css';

const SpaceAdmin: React.FC = () => {
  const [editType, setEditType] = useState('version');
  const { fetchTree, scopes } = useTree();

  useEffect(() => {
    fetchTree();
  }, [])

  return (
    <div className='container'>
      <div className="center-form">
        <div className='spaces'>
          <h1>Пространства</h1>
          <div className='horis_line'></div>
          <div className='tree_and_edit'>
            <div className='tree'>
              <VersionTree
                setEditType={setEditType} 
                treeData={scopes} 
              />
              <Button className='btn-primary' type="primary" htmlType="submit">
                Добавить
              </Button>
              <Button className='btn' type="default" htmlType="submit">
                Удалить
              </Button>
            </div>
            {editType === 'scope' && (<EditSpace />)}
            {editType === 'section' && (<EditSection />)}
            {editType === 'version' && (<EditVersion />)}
          </div>

          <div className='horis_line'></div>
          <div className='btn_bottom'>
            <div className='btns_end'>
              <Button className='btn-primary' type="primary" htmlType="submit">
                Сохранить
              </Button>
              <Button className='btn' type="default" htmlType="submit">
                Отмена
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SpaceAdmin;
