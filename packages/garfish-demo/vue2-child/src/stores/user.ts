import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface User {
  name: string
  age: number
  gender: string
  phone: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const setUser = (userData: User) => {
    user.value = userData
  }

  return { user, setUser }
})
