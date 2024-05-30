import React, { } from 'react';
import { Button, Checkbox, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import ListSys from '../ListSys';
import '../index.css';

const EditSpace: React.FC = () => {
  const { TextArea } = Input;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const onCheck = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className='vertical-row'></div>
      <div className='edit_file'>
        <div className='icon_title'>
          <h4>Иконка</h4>
          <img src='src\img\app2-144.png'></img>
          <Button className='btn' type="default" htmlType="submit">
            Выбeрите файл
          </Button>
        </div>
        <div>
          <h4>URL для пользователя</h4>
          <a>https://mobile.parmalogica.ru/store/Download/140/iOS</a>
        </div>
        <div className='input_title'>
          <h4>Название</h4>
          <Input showCount maxLength={20} onChange={onChange} />
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
        <h4>Авторизация</h4>
        <div className='input_description'>
          <div className='edge_alignment'>
            <div><Input className='input_lengh' placeholder="Логин" /></div>
            <div><Input className='input_lengh' placeholder="Пароль" /></div>
          </div>
        </div>
        <div className='sections'>
          <h4>Разделы</h4>
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
            <img src="src\components\images\yabloko.png"></img>
          </div>
        </div>
        <div className='input_title'>
          <h4>Copyright</h4>
          <Input showCount maxLength={40} onChange={onChange} />
        </div>
        <div>
          <h4>Файл соглашения о распространении:</h4>
          <p>distr_agreement.txt</p>

          <Button className='btn_without_padd' type="default" htmlType="submit">
            Выбeрите файл
          </Button>
        </div>

      </div>

    </>
  );
};


export default EditSpace;
