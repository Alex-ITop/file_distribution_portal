import React, { } from 'react';
import { Button, Checkbox, Form, Input} from 'antd';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import ListSys from '../ListSys';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const EditSection: React.FC = () => {
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
                    <h1>Редактирование раздела</h1>
                    <img src='src\components\images\app2-144.png'></img>
                     <h2>MKO</h2> {/* затем сюда подгружать имя раздела из базы  */}
                        </div>
                        <div>
                            <h4>URL для пользователя</h4>
                            <a>https://mobile.parmalogica.ru/store/Download/140/iOS</a>
                        </div>
                        <div className='input_title'>
                          <div className='text_check_on_siction'>
                            <h4>Раздел</h4>
                            <Checkbox onChange={onCheck}>Публиковать</Checkbox>
                            </div>
                        <Input className='input_title_50' placeholder="Linux" />
                        </div>
                        <div className='manifest_btn'>
                            <Checkbox className='manifest_check' onChange={onCheck}>Предоставлять манифест</Checkbox>
                            <p>manifest_template.txt</p>
                            <Button className='btn_without_padd' type="default" htmlType="submit">
                                Выбeрите файл
                            </Button>
                        </div>
                        <div className='input_title'>
                        <h4>Идентификатор</h4>
                        <Input showCount maxLength={30} onChange={onChange} />
                        </div>

                        <div className='sections'>
                        <h4>Версии</h4>
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


export default EditSection;
