import { defineStore } from 'pinia'
import { menuList as menu } from '@/data/menuData'
import { reactive } from 'vue'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import type { Menu } from '@/data/menuData'

const globs = import.meta.glob('../views/*.vue')

function getMenuList(menus: Menu[], pathPrefix = ''): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  for(const item of menus) {
    let { name, component, children, key, path, keepAlive } = item
    const menu: Partial<RouteRecordRaw> = {
      name,
      meta: {
        key,
        keepAlive: keepAlive || false
      },
    }
    if (component) {
      menu.component = globs[`../views/${component}`]
    }
    if (path) {
      if (!pathPrefix  || pathPrefix.endsWith('/') || path.startsWith('/')) {
        path = pathPrefix + path
      } else {
        path = pathPrefix + `/${path}`
      }
      menu.path = path
    }
    if (children && children.length > 0) {
      menu.children = getMenuList(children, menu.path)
    }
    res.push(menu as RouteRecordRaw)
  }
  return res
}

function flatMenu(menu: RouteRecordRaw[]): RouteRecordRaw[] {
  return menu.reduce((res, cur) => {
    if (cur.children && cur.children.length > 0 ) {
      res.push(...flatMenu(cur.children))
    }
    res.push(cur)
    return res
  }, [] as RouteRecordRaw[])
}

export const useMenuStore = defineStore('menu', () => {
  const menuList = reactive<RouteRecordRaw[]>(getMenuList(menu))
  const flattenMenuList = reactive<RouteRecordRaw[]>(flatMenu(menuList))

  const addRoutes = () => {
    menuList.forEach(item => router.addRoute(item))
  }

  return { menuList, addRoutes, flattenMenuList }
})
