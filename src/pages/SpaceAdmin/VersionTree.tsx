import React, { useState } from 'react';
import { Key } from 'antd/es/table/interface';
import { Tree } from 'antd';
import { isScope, isSection, isVersion } from './constants/tree';
import { IVersionTreeProps } from './types/tree';
import './index.css';

const VersionTree: React.FC<IVersionTreeProps> = (props) => {
  
  const { setEditType, treeData } = props;
  
  const [showLine] = useState<boolean>(true);
  const [showIcon] = useState<boolean>(false);
  const [showLeafIcon] = useState<boolean | React.ReactNode>(
    false
  );

  const onSelect = (selectedKeys: Key[]) => {
    const [str] = selectedKeys;
    const amountOfSymbols = String(str).length;

    switch (amountOfSymbols) {
      case isScope:
        setEditType('scope');
        break;
      case isSection:
        setEditType('section');
        break;
      case isVersion:
        setEditType('version')
        break;
      default:
        setEditType('');
    }
  }
  
  return (
    <div>
      <Tree className='tree'

        onSelect = {onSelect}
        showLine={showLine ? { showLeafIcon } : false}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
      />
      
    </div>
  );
};

export default VersionTree;