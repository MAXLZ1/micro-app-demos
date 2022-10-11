<template>
  <a-form :form="form">
    <a-form-item v-bind="formItemLayout" label="信息文本">
      <a-textarea
        v-decorator="['info', { rules: [{ required: true, message: '信息不能为空!' }] }]"
        placeholder="输入信息文本"
        :rows="4"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="消息类型">
      <a-select
        v-decorator="['type', { initialValue: 'success', rules: [{ required: true, message: '消息类型不能为空!' }] }]"
      >
        <a-select-option v-for="type in types" :key="type.value" :value="type.value">{{ type.label }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-row type="flex" justify="center">
      <a-col>
        <a-button type="primary" @click="sendMessage">向主应用发送信息</a-button>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { Input, Col, Row, Button, Select, Form } from 'ant-design-vue'
import { dispatchReceiveMessageEvent } from '@/utils/dispatchReceiveMessageEvent'
import { Types } from '@/utils/dispatchReceiveMessageEvent'

export default {
  name: 'MessageTrigger',
  data() {
    return {
      types: [
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
      ],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 3, offset: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 9 },
        },
      },
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'form' })
  },
  methods: {
    sendMessage() {
      this.form.validateFields((err, values) => {
        if (!err) {
          dispatchReceiveMessageEvent(values)
        }
      })
    },
  },
  components: {
    [Input.TextArea.name]: Input.TextArea,
    [Select.name]: Select,
    [Select.Option.name]: Select.Option,
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
  },
}
</script>

<style scoped lang="less"></style>
