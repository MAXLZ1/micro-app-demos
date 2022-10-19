import type { User } from '@/data/userData'

export const CHANGE_USER = 'changeUser'

function createUserEvent(user: User | null) {
  return new CustomEvent(CHANGE_USER, {
    detail: user
  })
}

export function dispatchUserEvent(user: User | null) {
  const event = createUserEvent(user)
  window.dispatchEvent(event)
}
