import React, { } from 'react';
import { Button, Checkbox, Input} from 'antd';
import '../index.css';
import ListSys from '../ListSys';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import MyCascader from '../MyCascader';
import SelectDate from '../SelectDate';

const EditVersion: React.FC = () => {
    const { TextArea } = Input;
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value); };

    const onCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`); };

    return (
        <>
        <div className='vertical-row'></div>
            <div className='edit_file'>
                <div className='icon_title'>
                    <h1>Редактирование версии</h1>
                    <img src='src\img\app2-144.png'></img>
                     <h2>MKO</h2> {/* затем сюда подгружать имя раздела из базы  */}
                        </div>
                        <div>
                            <h4>URL для пользователя</h4>
                            <a>https://mobile.parmalogica.ru/store/Download/140/iOS</a>
                        </div>
                        <div className='input_title'>
                          <h4>Раздел</h4>
                          <MyCascader></MyCascader>
                        </div>
                        <div className='input_title'>
                          <div className='text_check_on_siction'>
                            <h4>Версия</h4>
                            <Checkbox onChange={onCheck}>Публиковать</Checkbox>
                            </div>
                            <Input className='input_title_50' showCount maxLength={10} onChange={onChange} placeholder="1.07.09" />
                        </div>

                        <div className='input_title'>
                        <h4>Дата</h4>
                        <SelectDate/>
                        </div>

                        <h4>Описание</h4>
                        <div className='input_description'>
                        <TextArea
                            showCount
                            maxLength={100}
                            style={{ height: 200 }}
                            onChange={onChange}
                            placeholder="Введите описание"
                            />
                        </div>

                        <div className='illustrations'>
                        <div className='right_illustr'>
                          <div className='text_check'>
                            <h4>Иллюстрации</h4>
                            <Checkbox onChange={onCheck}>Отображать</Checkbox>
                            </div>
                            <ListSys></ListSys>
                            <div className=''>
                              <Button className='btn_last' type="default" htmlType="submit">
                                Добавить файл
                              </Button>
                              <Button className='btn_last' type="default" htmlType="submit">
                                Удалить файл
                              </Button>
                            </div>
                            </div>
                          <div className='left_illustr'>
                            <img  src="src\components\images\yabloko.png"></img>
                          </div>
                          </div>

                        <div className='input_title'>
                        <h4>Файлы</h4>
                        <div className='list_table'>
                          <div>
                            <ListSys></ListSys>
                          </div>
                          <div className='btns'>
                            <Button className='btn' type="default" htmlType="submit">
                              Добавить
                            </Button>
                            <Button className='btn' type="default" htmlType="submit">
                              Удалить
                            </Button>
                          </div>

                     </div>
                    </div>
                    </div>
            </>
    );
  };


export default EditVersion;
