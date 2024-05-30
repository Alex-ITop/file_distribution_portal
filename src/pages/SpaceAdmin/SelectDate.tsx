import React from 'react';
import './index.css';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const SelectDate: React.FC = () => (
    <DatePicker onChange={onChange} placeholder="Выберите дату"/>
);

export default SelectDate;