import { Button, Col, Form, Input, Row, Select } from 'antd'

enum Types {
  success = 'success',
  warn = 'warn',
  error = 'error',
  info = 'info',
}

interface Message {
  info: string
  type: Types
  from: string
}

const types = [
  {
    value: Types.success,
    label: '成功',
  },
  {
    value: Types.error,
    label: '失败',
  },
  {
    value: Types.warn,
    label: '提醒',
  },
  {
    value: Types.info,
    label: '信息',
  },
]
const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3, offset: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 9 },
  }
}
const initialValues ={
  type: Types.success,
  info: ''
}

export default function MessageTrigger() {
  const [ form ] = Form.useForm()

  const onFinish = (values: Omit<Message, 'from'>) => {
    // 向主应用发送数据
    window.eventCenterForViteApp.dispatch({
      type: 'message',
      data: {
        ...values,
        from: 'Vite子应用'
      }
    })
  }

  return (
    <Form {...layout} form={form} onFinish={onFinish} initialValues={initialValues}>
      <Form.Item name="info" label="信息文本" rules={[{ required: true, message: '信息不能为空!' }]}>
        <Input.TextArea placeholder="输入信息文本" rows={4} />
      </Form.Item>
      <Form.Item name="type" label="消息类型" rules={[{ required: true, message: '消息类型不能为空!' }]}>
        <Select>
          {
            types.map(({ value, label }) => <Select.Option value={value} key={value}>{label}</Select.Option>)
          }
        </Select>
      </Form.Item>
      <Row justify="center">
        <Col>
          <Button type="primary" htmlType="submit">向主应用发送信息</Button>
        </Col>
      </Row>
    </Form>
  )
}
