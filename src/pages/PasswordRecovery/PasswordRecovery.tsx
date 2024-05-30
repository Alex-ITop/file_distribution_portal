import React from 'react';
import { Button, Form, Input, Typography, ConfigProvider, message } from 'antd';
import './index.css';

const PasswordRecovery: React.FC = () => {
    const { Title } = Typography;
    const [messageApi] = message.useMessage();
    const onFinish = (values:any) => {
        console.log('Success:', values);
    
    }
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Запрос на восстановление отправлен',
        });
      };


    return(
        <div className="center-form">
      <ConfigProvider theme={{
      token: {
        colorPrimary: '#ec1c24',
      },
    }}>

        <div className="shadow">
          
            <Form className ="ant-form-pass"layout='vertical' name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Title>
                  Восстановление <br/>
                  пароля
                </Title>
              <div className="form-wrapper">
              <Form.Item className='login-recovery-menu' name="username" rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}>
                <div className="shadow">
                  <Input placeholder='Введите логин' />
                </div>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 18 }}>
                <Button block onClick={success} type="primary" htmlType="submit">
                  Отправить заявку
                </Button>
              </Form.Item>
              </div>
            </Form>
            </div>
      </ConfigProvider>
      </div>
    );
}

export default PasswordRecovery;