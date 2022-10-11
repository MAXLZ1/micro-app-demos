<template>
  <a-layout has-sider>
    <a-layout-sider class="sider" width="250" v-model:collapsed="collapsed" :trigger="null">
      <div class="logo">
        <a-typography-text v-if="!collapsed">
          当前：qiankun-Vue3 主应用
        </a-typography-text>
      </div>
      <a-menu :selectedKeys="selectedKeys" :openKeys="openKeys" @select="handleSelect" mode="inline" theme="dark">
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
            <github-outlined class="github" @click="toGithub"/>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <a-spin :spinning="microAppLoading" :delay="300" size="large" wrapperClassName="spin">
          <div>
            <micro-app
              v-if="activeApp"
              :name='activeApp.name'
              :url='activeApp.url'
              :baseroute='activeApp.baseroute'
              @mounted="handleMounted"
            />
            <router-view v-slot="{ Component }" v-else>
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </div>
        </a-spin>
      </a-layout-content>
      <a-layout-footer class='footer'>
        Created by MAXLZ
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined, GithubOutlined, ThunderboltOutlined, } from '@ant-design/icons-vue'
import { ref, reactive, watchEffect, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, useRouter } from 'vue-router'
import { microAppLoading } from '@/utils/microAppLoading'
import { useAppStore } from '@/stores/app'
import microApp from '@micro-zoe/micro-app'
import type { MicroApp } from '@/data/appData'
import type { Menu } from '@/data/menuData'
import { dispatchUserEvent } from '@/utils/dispatchUserEvent'
import { useUserStore } from '@/stores/user'

const collapsed = ref(false)
const selectedKeys = ref<number[]>([])
const openKeys = reactive<number[]>([])
// 激活的子应用
const activeApp = ref<MicroApp | null>(null)
// 要跳转的路由地址
const path = ref('')
// 子应用挂载后是否需要跳转
const needNavigate = ref(false)

const { menuList, flattenMenuList } = useMenuStore()
const router = useRouter()
const route = useRoute()
const { user } = useUserStore()
const { getActiveMicroApp } = useAppStore()

function getParentKeys(menus: Menu[], key: number, parents: number[]){
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

/**
 * 进行路由跳转
 * @param jump 是否进行router.push
 */
function navigate(jump = true) {
  const newApp = getActiveMicroApp(path.value) || null
  // 子应用第一次挂载时，需要在挂载之后，再进行路由跳转
  if (!activeApp.value || (newApp && activeApp.value.name !== newApp.name)) {
    activeApp.value = newApp
    needNavigate.value = true
  } else {
    activeApp.value = newApp
    if (activeApp.value) {
      if (activeApp.value.name === 'viteApp') {
        window.dispatchEvent(new CustomEvent('viteApp:routerChange', {
          detail: path.value
        }))
      } else {
        microApp.setData(activeApp.value.name, {
          path: path.value
        })
      }
    } else if (jump) {
      router.push(path.value)
    }
  }
}

function handleMounted() {
  if (needNavigate.value) {
    needNavigate.value = false
    if (activeApp.value) {
      // 派发用户信息更新事件
      dispatchUserEvent(user)
      if (activeApp.value.name === 'viteApp') {
        window.dispatchEvent(new CustomEvent('viteApp:routerChange', {
          detail: path.value
        }))
      } else {
        microApp.setData(activeApp.value.name, {
          path: path.value
        })
      }
    }
  }
}

function handleSelect({ key }: { key: number }) {
  if (key !== undefined) {
    selectedKeys.value = [key]
    const res = flattenMenuList.find(item => item.key === key)
    if (res && res.path) {
      path.value = res.path
      navigate()
    }
  }
}

function initKeys() {
  const { fullPath } = route
  const res = flattenMenuList.find(item => item.path === fullPath)
  if (res) {
    selectedKeys.value = [res.key]
    const parents: number[] = []
    getParentKeys(menuList, res.key, parents)
    openKeys.push(...parents)
  }
}

watchEffect(initKeys)

function toGithub() {
  window.open('https://github.com/MAXLZ1/micro-app-demos/tree/main/packages/qiankun-demo', '_blank')
}

onMounted(() => {
  path.value = route.path
  navigate(false)
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
