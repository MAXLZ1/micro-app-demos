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
          当前：icestark-Vue3 主应用
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
            <div ref="microAppDom" id="child-app"></div>
            <router-view v-show="!activeMicroApp" v-slot="{ Component }">
              <keep-alive :include="keepAliveViews">
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
import { ref, reactive, watchEffect, onMounted, toRaw, onUnmounted, computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, useRouter } from 'vue-router'
import { microAppLoading } from '@/utils/microAppLoading'
import { registerMicroApps, removeMicroApps } from '@ice/stark/lib/apps'
import start from '@ice/stark/lib/start'
import { useAppStore } from '@/stores/app'
import type { Menu } from '@/data/menuData'
import { storeToRefs } from 'pinia'

const collapsed = ref(false)
const selectedKeys = ref<number[]>([])
const openKeys = reactive<number[]>([])
const microAppDom = ref<HTMLDivElement | null>(null)
const activeMicroApp = ref(false)
const keepAliveViews = reactive(['Vue2KeepAliveView', 'React18KeepAliveView'])

const { menuList, flattenMenuList } = useMenuStore()
const router = useRouter()
const route = useRoute()
const { apps } = storeToRefs(useAppStore())

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

function toGithub() {
  window.open(
    'https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/icestark-demo',
    '_blank'
  )
}

onMounted(() => {
  // 注册子应用
  registerMicroApps(
    toRaw(apps.value).map(
      (item) =>
        ({
          ...item,
          container: microAppDom.value
        } as any)
    )
  )

  start({
    prefetch: true,
    shouldAssetsRemove() {
      return false
    },
    onActiveApps(activeApps) {
      activeMicroApp.value = !!(activeApps || []).length
    }
  })
})

onUnmounted(() => {
  removeMicroApps(toRaw(apps.value).map(item => item.name) as string[])
})
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
