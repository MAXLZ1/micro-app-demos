<template>
  <a-form :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="信息文本" v-bind="validateInfos.info">
      <a-textarea
        placeholder="输入信息文本"
        :rows="4"
        v-model:value="formData.info"
      />
    </a-form-item>
    <a-form-item label="消息类型" v-bind="validateInfos.type">
      <a-select v-model:value="formData.type">
        <a-select-option
          v-for="type in types"
          :key="type.value"
          :value="type.value"
        >
          {{ type.label }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-row type="flex" justify="center">
      <a-col>
        <a-button type="primary" @click="sendMessage"
          >向主应用(自己)发送信息</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Form, notification } from 'ant-design-vue'
import { MessageTypes } from '@/types/microAppDataListenerTypes'

const formData = reactive<{ type: MessageTypes; info: string }>({
  type: MessageTypes.success,
  info: ''
})
const rules = reactive({
  info: [{ required: true, message: '信息不能为空!' }],
  type: [{ required: true, message: '消息类型不能为空!' }]
})
const types = reactive([
  {
    value: MessageTypes.success,
    label: '成功'
  },
  {
    value: MessageTypes.error,
    label: '失败'
  },
  {
    value: MessageTypes.warn,
    label: '提醒'
  },
  {
    value: MessageTypes.info,
    label: '信息'
  }
])

const labelCol = {
  xs: { span: 24 },
  sm: { span: 3, offset: 6 }
}
const wrapperCol = {
  xs: { span: 24 },
  sm: { span: 9 }
}

const { validate, validateInfos } = Form.useForm(formData, rules)

function sendMessage() {
  validate().then(() => {
    notification[formData.type]({
      message: '来自【主应用】的消息',
      description: formData.info
    })
  })
}
</script>

<style scoped lang="less"></style>
