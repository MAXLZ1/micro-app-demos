<template>
  <a-form v-if="user">
    <a-descriptions title="主应用的数据 User Store Info" bordered :column="column">
      <template #extra>
        <a-button type="primary" @click="toggleEdit">
          <template #icon>
            <save-outlined v-if="isEdit" />
            <edit-outlined v-else />
          </template>
        </a-button>
      </template>
      <a-descriptions-item label="UserName">
        <a-form-item v-bind="validateInfos.name">
          <a-input v-model:value="formState.name" :bordered="false" :disabled="!isEdit" />
        </a-form-item>
      </a-descriptions-item>
      <a-descriptions-item label="Age">
        <a-form-item v-bind="validateInfos.age">
          <a-input-number v-model:value="formState.age" :min="0" :max="130" :bordered="false" :disabled="!isEdit" />
        </a-form-item>
      </a-descriptions-item>
      <a-descriptions-item label="Gender">
        <a-form-item v-bind="validateInfos.gender">
          <a-select v-model:value="formState.gender" :bordered="false" :disabled="!isEdit">
            <a-select-option v-for="{ label, value } in genders" :key="value" :value="value">{{ label }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-descriptions-item>
      <a-descriptions-item label="Telephone">
        <a-form-item v-bind="validateInfos.phone">
          <a-input v-model:value="formState.phone" :bordered="false" :disabled="!isEdit" />
        </a-form-item>
      </a-descriptions-item>
    </a-descriptions>
  </a-form>
</template>

<script lang="ts" setup>
import { EditOutlined, SaveOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'
import { onBeforeUnmount, onMounted, reactive, ref, toRaw } from 'vue'
import { Form, message } from 'ant-design-vue'
import type { User } from '@/data/userData'
import { onBeforeRouteLeave } from 'vue-router'

const { user, setUser } = useUserStore()

const column = { xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }
const formState = reactive<User>(user ? {...user} : {
  name: '',
  age: 0,
  gender: 'male',
  phone: ''
})
const rules = reactive({
  name: [
    {
      required: true,
      message: '姓名不能为空',
    },
  ],
  age: [
    {
      required: true,
      message: '年龄不能为空',
    },
  ],
  gender: [
    {
      required: true,
      message: '性别不能为空',
    },
  ],
  phone: [
    {
      required: true,
      message: '电话不能为空',
    },
  ],
})
const { validate, validateInfos } = Form.useForm(formState, rules)
const isEdit = ref(false)

const genders = [
  {
    value: 'male',
    label: '男'
  },
  {
    value: 'female',
    label: '女'
  },
  {
    value: 'secret',
    label: '保密'
  },
]

function toggleEdit() {
  if (isEdit.value) {
    validate().then(() => {
      setUser(toRaw(formState))
      isEdit.value = !isEdit.value
      message.success({
        content: '用户修改成功，您可以切换至子应用查看是否生效。',
      })
    })
  } else {
    isEdit.value = !isEdit.value
  }
}

onBeforeRouteLeave(() => {
  if (isEdit.value) {
    message.warn({
      content: '用户信息未保存，主应用信息不会生效。',
    })
  }
})
</script>

<style scoped lang="less"></style>
