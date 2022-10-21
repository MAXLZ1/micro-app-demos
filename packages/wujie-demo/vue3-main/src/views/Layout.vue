<template>
  <a-layout has-sider>
    <a-layout-sider
      class="sider"
      width="250"
      v-model:collapsed="collapsed"
      :trigger="null"
    >
      <div class="logo">
        <a-typography-text v-if="!collapsed">
          当前：wujie-Vue3 主应用
        </a-typography-text>
      </div>
      <a-menu
        :selectedKeys="selectedKeys"
        :openKeys="openKeys"
        @select="handleSelect"
        mode="inline"
        theme="dark"
      >
        <template v-for="item in menuList" :key="item.key">
          <template v-if="item.children">
            <sub-menu :key="item.key" :menu-info="item" />
          </template>
          <template v-else>
            <a-menu-item :key="item.key">
              {{ item.name }}
              <template #icon>
                <thunderbolt-outlined />
              </template>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout class="right">
      <a-layout-header class="header">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col>
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="changeCollapsed"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="changeCollapsed"
            />
          </a-col>
          <a-col>
            <github-outlined class="github" @click="toGithub" />
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <a-spin
          :spinning="microAppLoading"
          :delay="300"
          size="large"
          wrapperClassName="spin"
        >
          <div>
            <wujie-vue
              v-if="microApp"
              :name="microApp.name"
              :url="microApp.url"
              :props="microAppProps"
              :afterMount="afterMount"
            />
            <router-view v-slot="{ Component }">
              <keep-alive :include="aliveView">
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </div>
        </a-spin>
      </a-layout-content>
      <a-layout-footer class="footer"> Created by MAXLZ </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<script lang="ts" setup>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GithubOutlined,
  ThunderboltOutlined
} from '@ant-design/icons-vue'
import { ref, reactive, watchEffect, watch, computed, toRaw } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, useRouter } from 'vue-router'
import { microAppLoading } from '@/utils/microAppLoading'
import type { Menu } from '@/data/menuData'
import WujieVue from 'wujie-vue3'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const collapsed = ref(false)
const selectedKeys = ref<number[]>([])
const openKeys = reactive<number[]>([])
const aliveView = reactive<string[]>(['KeepAliveView'])

const { menuList, flattenMenuList } = useMenuStore()
const router = useRouter()
const route = useRoute()
const { apps } = storeToRefs(useAppStore())
const { user } = storeToRefs(useUserStore())

const microApp = computed(() => {
  const app = apps.value.find((item) => route.path.startsWith(item.activeRule))
  if (app) {
    return {
      ...app,
      url: `${app.url}#${route.fullPath}`
    }
  }
  return null
})
const microData = computed(() => ({
  user: toRaw(user.value)
}))
const microAppProps = computed(() => ({ router }))

const { bus } = WujieVue

function afterMount() {
  if (microApp.value) {
    // 解决首次加载路由跳转地址错误问题
    bus.$emit(`${microApp.value.name}:router-change`, {
      path: route.fullPath,
      replace: true
    })
  }
  bus.$emit('changeUser', toRaw(microData.value))
}

function getParentKeys(menus: Menu[], key: number, parents: number[]) {
  for (const item of menus) {
    if (key === item.key) {
      return true
    } else if (item.children && item.children.length > 0) {
      parents.push(item.key)
      const hasKey = getParentKeys(item.children, key, parents)
      if (hasKey) return true
      parents.pop()
    }
  }
  return false
}

function changeCollapsed() {
  collapsed.value = !collapsed.value
}

function handleSelect({ key }: { key: number }) {
  if (key !== undefined) {
    selectedKeys.value = [key]
    const res = flattenMenuList.find((item) => item.key === key)
    if (res) {
      router.push(res.path!)
    }
  }
}

function initKeys() {
  const { fullPath } = route
  const res = flattenMenuList.find((item) => item.path === fullPath)
  if (res) {
    selectedKeys.value = [res.key]
    const parents: number[] = []
    getParentKeys(menuList, res.key, parents)
    openKeys.push(...parents)
  }
}

watchEffect(initKeys)

watch(route, (val) => {
  if (microApp.value) {
    bus.$emit(`${microApp.value.name}:router-change`, {
      path: val.fullPath,
      replace: false
    })
  }
})

function toGithub() {
  window.open(
    'https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/wujie-demo',
    '_blank'
  )
}
</script>

<style lang="less" scoped>
.sider {
  overflow: auto;
  height: 100vh;

  .logo {
    height: 32px;
    line-height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    font-size: 16px;
    text-align: center;

    :deep(.@{ant-prefix}-typography) {
      color: #ffffff;
    }
  }
}

.right {
  height: 100vh;

  .header {
    background: #fff;
    padding: 0 20px;

    .trigger {
      font-size: 20px;
    }

    .github {
      font-size: 30px;
      vertical-align: middle;
    }
  }

  .spin {
    background: @body-background;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    width: calc(100% - 30px);
    margin: 15px 15px 0 15px;
    padding: 20px;
  }

  .footer {
    text-align: center;
  }
}
</style>
