import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from '../types/types.ts'
import { gradesApi } from '../../api/apiSlice/gradesApi.ts'
import { groupsApi } from '../../api/apiSlice/groupsApi.ts'
import { studentsApi } from '../../api/apiSlice/studentsApi.ts'
import { teachersApi } from '../../api/apiSlice/teachersApi.ts'
import { parentsApi } from '../../api/apiSlice/parentsApi.ts'

const rootReducer = combineReducers({
    [gradesApi.reducerPath]: gradesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
    [parentsApi.reducerPath]: parentsApi.reducer,
})

export const createStore = (preloadedState?: StateSchema) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                gradesApi.middleware,
                groupsApi.middleware,
                studentsApi.middleware,
                teachersApi.middleware,
                parentsApi.middleware
            ),
        preloadedState,
    })
}
