import { defineStore } from 'pinia'
import { menuList as menu } from '@/data/menuData'
import { reactive } from 'vue'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import type { Menu } from '@/data/menuData'

const globs = import.meta.glob('../views/*.vue')

// menu转Routes
function transformRoutes(menus: Menu[], parentPath = ''): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  for (const item of menus) {
    const { path, component, key, children } = item
    const routeItem: RouteRecordRaw = {
      name: key + '',
      path: '',
      children: []
    }
    // 处理一级路由
    if (!parentPath && (!children || children?.length === 0)) {
      routeItem.name = `top${item.key}`
      routeItem.component = () => import('@/views/Layout.vue')
      routeItem.path = ''
      routeItem.children = [
        {
          name: item.key + '',
          path: `/${item.path}`
        } as RouteRecordRaw
      ]
      if (component) {
        routeItem.children[0].component = globs[`../views/${component}`]
      }
      res.push(routeItem)
      continue
    }
    routeItem.path = parentPath + '/' + path
    if (component) {
      routeItem.component = globs[`../views/${component}`]
    }
    if (children) {
      routeItem.children = transformRoutes(children, routeItem.path)
    }
    res.push(routeItem)
  }
  return res
}

// 组合menu完整path
function combineMenuPath(menus: Menu[], parentPath = ''): Menu[] {
  return menus.map((item) => {
    const path = `${parentPath}/${item.path}`
    if (item.children) {
      return {
        ...item,
        path,
        children: combineMenuPath(item.children, path)
      }
    }
    return { ...item, path }
  })
}

function flatMenu(menu: Menu[]): Menu[] {
  return menu.reduce((res, cur) => {
    if (cur.children && cur.children.length > 0) {
      res.push(...flatMenu(cur.children))
    }
    res.push(cur)
    return res
  }, [] as Menu[])
}

export const useMenuStore = defineStore('menu', () => {
  const menuList = reactive<Menu[]>(combineMenuPath(menu))
  const flattenMenuList = reactive<Menu[]>(flatMenu(menuList))

  const addRoutes = () => {
    transformRoutes(menu).forEach((item) => {
      router.addRoute(item)
    })
  }

  return { menuList, addRoutes, flattenMenuList }
})
