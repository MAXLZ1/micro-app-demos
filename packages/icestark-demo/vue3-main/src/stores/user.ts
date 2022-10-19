import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import type { User } from '@/data/userData'
import store from '@ice/stark-data/lib/store'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const setUser = (userParam: User) => {
    user.value = userParam
    store.set('user', toRaw(user.value))
  }

  return { user, setUser }
})
