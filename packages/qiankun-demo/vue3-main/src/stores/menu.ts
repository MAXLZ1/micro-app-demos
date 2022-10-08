import { defineStore } from 'pinia'
import { menuList as menu } from '@/data/menuData'
import { reactive } from 'vue'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import type { Menu } from '@/data/menuData'

const globs = import.meta.glob('../views/*.vue')

export type MenuItem = RouteRecordRaw & {
  meta: {
    key: number
  },
  children?: MenuItem[]
}

function getMenuList(menus: Menu[], pathPrefix = ''): MenuItem[] {
  const res: MenuItem[] = []
  for(const item of menus) {
    let { name, component, children, key, path } = item
    const menu: Partial<MenuItem> = {
      name,
      meta: {
        key,
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
    res.push(menu as MenuItem)
  }
  return res
}

function flatMenu(menu: MenuItem[]): MenuItem[] {
  return menu.reduce((res, cur) => {
    if (cur.children && cur.children.length > 0 ) {
      res.push(...flatMenu(cur.children))
    }
    res.push(cur)
    return res
  }, [] as MenuItem[])
}

export const useMenuStore = defineStore('menu', () => {
  const menuList = reactive<MenuItem[]>(getMenuList(menu))
  const flattenMenuList = reactive<RouteRecordRaw[]>(flatMenu(menuList))

  const addRoutes = () => {
    menuList.forEach(item => router.addRoute(item))
  }

  return { menuList, addRoutes, flattenMenuList }
})
