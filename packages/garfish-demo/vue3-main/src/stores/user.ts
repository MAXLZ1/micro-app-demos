import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import type { User } from '@/data/userData'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const setUser = (userParam: User) => {
    user.value = userParam
    window.Garfish.channel.emit('userInfo', toRaw(user.value))
  }

  return { user, setUser }
})
