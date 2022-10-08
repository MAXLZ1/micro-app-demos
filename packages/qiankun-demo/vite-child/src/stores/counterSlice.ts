import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
