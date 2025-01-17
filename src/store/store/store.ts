import { configureStore } from '@reduxjs/toolkit'
import { StateType } from './types.ts'

export const createStore = (preloadedState?: StateType) => {
    return configureStore({
        reducer: {},
        preloadedState,
    })
}
