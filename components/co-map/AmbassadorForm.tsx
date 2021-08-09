import React, { FC } from 'react'
import { Button, Form, Input, message } from 'antd'
import { AxiosInstance } from '../../api'
import { BASICS_ENDPOINTS } from '../../api/endpoints/BasicsEndpoints'
import { textFromData } from '../../pages/api/v0/co-map/ambassador_application'
import emailjs from 'emailjs-com'


export type AmbassadorFormType = {
  name: string,
  location: string,
  contact: string,
  facebook_link: string,
  motivation: string
}

const { useForm } = Form

const MESSAGE_KEY = 'sending_application_messag'


const AmbassadorForm: FC = () => {

  const onFinish = () => async (answer: AmbassadorFormType) => {
    console.log(answer)
    message.loading({ content: 'Отправка...', key: MESSAGE_KEY })

    emailjs.init(process.env.EMAILJS_ID)

    emailjs.send("service_7pjuk1g", "template_leb2rrp", answer, 'user_VCmeQ7PykTTXVzRaXXiYz').then((result) => {
      if (result) {
        message.success({content: "Отправлено!", key: MESSAGE_KEY})
      }
      form.resetFields()
    }, (error) => {
      if (error) {
        message.error({content: error.text, key: MESSAGE_KEY})
      }
      form.resetFields()
    })

    /*AxiosInstance.PostRequest(BASICS_ENDPOINTS.co_map.postAmbassadorAssignment(), answer).then(response => {
      if (response.status === 200) {
        message.success({ content: 'Отправлено!', key: MESSAGE_KEY })
        form.resetFields()
      } else {
        message.error({ content: 'Ошибка! :(', key: MESSAGE_KEY })
      }
    })*/
  }

  const [form] = useForm<AmbassadorFormType>()

  return (
    <>
      <div className={'ambassador_form_div'} id={'ambassador_form'}>
        <Form
          form={form}
          onFinish={onFinish()}
          className={'ambassador_form'}>
          <div className={'co_map_title_parent'}>
            <h2 className={'co_map_title'}>
              Подать заявку
            </h2>
          </div>

          <h4 className={'co_map_smallsubtitle'}>
            Как к вам обращаться?
          </h4>

          <Form.Item
            name='name'
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder='ваше имя...' />
          </Form.Item>

          <h4 className={'co_map_smallsubtitle'}>
            Где вы живете?
          </h4>

          <Form.Item
            name='location'
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder='город, улица...' />
          </Form.Item>

          <h4 className={'co_map_smallsubtitle'}>
            Как с вами связаться: телефон, телеграм, email...
          </h4>

          <Form.Item
            name='contact'
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder='@your_nickname' />
          </Form.Item>

          <h4 className={'co_map_smallsubtitle'}>
            Ссылка на профиль Facebook
          </h4>

          <Form.Item
            name='facebook_link'
            rules={[{ required: true, min: 1 }]}
          >
            <Input />
          </Form.Item>

          <h4 className={'co_map_smallsubtitle'}>
            Расскажите, почему вам интересно быть амбассадором?
          </h4>

          <Form.Item
            name='motivation'
            rules={[]}
          >
            <Input.TextArea />
          </Form.Item>

          <div className={'submit_ambassador_parent'}>
            <Button
              className={'submit_ambassador_form'}
              type='primary'
              htmlType='submit'
              style={{
                width: '50%',
                backgroundColor: '#414BB2',
              }}
            >
              Отправить
            </Button>
          </div>


        </Form>
      </div>
    </>
  )
}

export default AmbassadorForm