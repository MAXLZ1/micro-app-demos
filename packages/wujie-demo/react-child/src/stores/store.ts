import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import counterReducer from '@/stores/counterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
