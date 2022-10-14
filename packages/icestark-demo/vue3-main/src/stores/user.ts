import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import type { User } from '@/data/userData'
import { dispatchUserEvent } from '@/utils/dispatchUserEvent'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const setUser = (userParam: User) => {
    user.value = userParam
    dispatchUserEvent(toRaw(user.value))
  }

  return { user, setUser }
})
