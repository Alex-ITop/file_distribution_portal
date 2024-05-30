import React from 'react';
import { Cascader } from 'antd';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'Linux',
    label: 'Linux',
  },
  {
    value: 'Windows Server',
    label: 'Windows Server',
  },
  {
    value: 'iOS',
    label: 'iOS',
  },
];

const onChange = (value: string[]) => {
  console.log(value);
};

const MyCascader: React.FC = () => (
  <Cascader options={options}  placeholder="Please select" />
);

export default MyCascader;