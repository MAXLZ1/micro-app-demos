<template>
  <a-config-provider prefixCls="mav3">
    <a-layout has-sider>
      <a-layout-sider class="sider" width="250" v-model:collapsed="collapsed" :trigger="null">
        <div class="logo">
          <template v-if="!collapsed">
            当前：qiankun-Vue3 主应用
          </template>
        </div>
        <a-menu :selectedKeys="selectedKeys" :openKeys="openKeys" @select="handleSelect" mode="inline" theme="dark">
          <template v-for="item in menuList" :key="item.meta.key">
            <template v-if="item.children">
              <sub-menu :key="item.meta.key" :menu-info="item" />
            </template>
            <template v-else>
              <a-menu-item :key="item.meta.key">
                {{ item.name }}
              </a-menu-item>
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout class="right">
        <a-layout-header class="header">
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
        </a-layout-header>
        <a-layout-content>
          <a-spin :spinning="microAppLoading" :delay="100" size="large" wrapperClassName="spin">
            <div>
              <div id="child-app"></div>
              <router-view v-slot="{ Component }">
                <keep-alive :include="aliveView">
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
  </a-config-provider>
</template>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref, reactive, onBeforeUnmount, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRoute, useRouter } from 'vue-router'
import { microAppLoading } from '@/utils/microAppLoading'
import type { MenuItem } from '@/stores/menu'

const collapsed = ref(false)
const selectedKeys = ref<number[]>([])
const openKeys = reactive<number[]>([])
const aliveView = reactive<string[]>(['KeepAliveView'])

const { menuList, flattenMenuList } = useMenuStore()
const router = useRouter()
const route = useRoute()

function getParentKeys(menus: MenuItem[], key: number, parents: number[]){
  for (const item of menus) {
    if (key === item.meta!.key) {
      return true
    } else if (item.children && item.children.length > 0) {
      parents.push(item.meta!.key  as number)
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
    const res = flattenMenuList.find(item => item.meta!.key === key)
    if (res) {
      router.push(res.path!)
    }
  }
}

function initKeys() {
  const { fullPath } = route
  const res = flattenMenuList.find(item => item.path === fullPath)
  if (res) {
    selectedKeys.value = [res.meta!.key as number]
    const parents: number[] = []
    getParentKeys(menuList, res.meta!.key as number, parents)
    openKeys.push(...parents)
  }
}

onMounted(() => {
  window.addEventListener('routerAfterEach', initKeys)
})
onBeforeUnmount(() => {
  window.removeEventListener('routerAfterEach', initKeys)
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
    color: #ffffff;
    font-size: 16px;
    text-align: center;
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
