import { configureStore, Middleware } from '@reduxjs/toolkit'
import { StateType } from '../types/types.ts'
import { apiSlice } from '../../api/apiSlice/apiSlice.ts'

export const createStore = (preloadedState?: StateType) => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath as string]: apiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware as Middleware),
        preloadedState,
    })
}
