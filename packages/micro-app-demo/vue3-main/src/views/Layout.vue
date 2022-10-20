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
          当前：MicroApp-Vue3 主应用
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
            <micro-app
              v-if="activeApp"
              :name="activeApp.name"
              :url="activeApp.url"
              :baseroute="activeApp.baseroute"
              :inline="istVite"
              :disableSandbox="istVite"
              :data="microData"
              clear-data
              @mounted="handleMounted"
            />
            <router-view />
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
import { ref, reactive, watchEffect, toRaw, computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, useRouter } from 'vue-router'
import { microAppLoading } from '@/utils/microAppLoading'
import { useAppStore } from '@/stores/app'
import type { MicroApp } from '@/data/appData'
import type { Menu } from '@/data/menuData'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import microApp from '@micro-zoe/micro-app'

const collapsed = ref(false)
const selectedKeys = ref<number[]>([])
const openKeys = reactive<number[]>([])
// 激活的子应用
const activeApp = ref<MicroApp | null>(null)
// 子应用要跳转的路由地址
const path = ref('')

const { menuList, flattenMenuList } = useMenuStore()
const router = useRouter()
const route = useRoute()
const { user } = storeToRefs(useUserStore())
const { getActiveMicroApp } = useAppStore()

const microData = computed(() => ({
  user: toRaw(user.value),
  path: path.value,
  router // 下发router对象，用于子应用控制主应用跳转
}))
const istVite = computed(
  () => activeApp.value && activeApp.value.name === 'viteApp'
)

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

function initKeys() {
  const { fullPath } = route
  const res = flattenMenuList.find((item) => item.path === fullPath)
  if (res) {
    selectedKeys.value = [res.key]
    activeApp.value = getActiveMicroApp(route.path) || null
    if (activeApp.value) {
      path.value = route.path
    } else {
      path.value = ''
    }
    const parents: number[] = []
    getParentKeys(menuList, res.key, parents)
    openKeys.push(...parents)
  }
}

watchEffect(initKeys)

function toGithub() {
  window.open(
    'https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/micro-app-demo',
    '_blank'
  )
}

function changeCollapsed() {
  collapsed.value = !collapsed.value
}

function handleMounted() {
  if (activeApp.value) {
    microApp.setData(activeApp.value.name, {
      ...toRaw(microData.value)
    })
  }
}

// 菜单选中事件
function handleSelect({ key }: { key: number }) {
  if (key !== undefined) {
    selectedKeys.value = [key]
    const res = flattenMenuList.find((item) => item.key === key)
    if (res && res.path) {
      router.push(res.path)
    }
  }
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
