import React, { FC, useState } from 'react'
import { Alert, Button, Form, Input } from 'antd'
import { AxiosInstance } from '../../api'
import { BASICS_ENDPOINTS } from '../../api/endpoints/BasicsEndpoints'


type AmbassadorFormType = {
  name: string,
  location: string,
  contact: string,
  facebook_link: string,
  motivation: string
}

const { useForm } = Form

const ALERT_DISAPPEARING_TIME = 10000


const AmbassadorForm: FC = () => {

  const [state, setState] = useState<'input' | 'received' | 'error'>('input')

  const onFinish = () => async (answer: AmbassadorFormType) => {
    console.log(answer)
    AxiosInstance.PostRequest(BASICS_ENDPOINTS.co_map.postAmbassadorAssignment(), answer).then(response => {
      if (response.status === 200) {
        setState('received')
      } else {
        setState('error')
      }
    })
  }

  const [form] = useForm<AmbassadorFormType>()

  const [alertMessage, setAlertMessage] = useState(<div/>)


  if (state === 'received') {
    setAlertMessage(<Alert message={"Заявка успешно отправлена!"} type={"success"}/>)
    setTimeout(setAlertMessage.bind(<div/>), ALERT_DISAPPEARING_TIME)

  }

  if (state === 'error') {
    setAlertMessage(<Alert message={"Что-то пошло не так... :( Попробуйте еще раз"} type={"error"}/>)
    setTimeout(setAlertMessage.bind(<div/>), ALERT_DISAPPEARING_TIME)
  }

  if (state === 'received' || state === 'error') {
    form.resetFields()
    setState('input')
  }


  return (
    <>
      <div className={"ambassador_form_div"}>
        <Form
        form={form}
        onFinish={onFinish()}
        className={"ambassador_form"}>
          <h1 className={"co_map_title"}>
            Подать заявку
          </h1>
          <h4 className={"co_map_smallsubtitle"}>
            Как к вам обращаться?
          </h4>

          <Form.Item
            name="name"
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder="ваше имя..."/>
          </Form.Item>

          <h4 className={"co_map_smallsubtitle"}>
            Где вы живете?
          </h4>

          <Form.Item
            name="location"
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder="город, улица..."/>
          </Form.Item>

          <h4 className={"co_map_smallsubtitle"}>
            Как с вами связаться: телефон, телеграм, email...
          </h4>

          <Form.Item
            name="contact"
            rules={[{ required: true, min: 1 }]}
          >
            <Input placeholder="@your_nickname"/>
          </Form.Item>

          <h4 className={"co_map_smallsubtitle"}>
            Ссылка на профиль Facebook
          </h4>

          <Form.Item
            name="facebook_link"
            rules={[{ required: true, min: 1 }]}
          >
            <Input/>
          </Form.Item>

          <h4 className={"co_map_smallsubtitle"}>
            Расскажите, почему вам интересно быть амбассадором?
          </h4>

          <Form.Item
            name="motivation"
            rules={[]}
          >
            <Input.TextArea/>
          </Form.Item>

          <div className={"submit_ambassador_parent"}>
            <Button
              className={"submit_ambassador_form"}
              type="primary"
              htmlType="submit"
              style={{
                width: '50%',
                backgroundColor: '#414BB2'
              }}
            >
              Отправить
            </Button>
          </div>


        </Form>
      </div>
      <div className={"ambassador_form_div"}>
        <div
          style={{
            width: '50%'
          }}>
          {alertMessage}
        </div>
      </div>
    </>
  )
}

export default AmbassadorForm