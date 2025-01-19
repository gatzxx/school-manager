import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from '../types/types.ts'
import { gradesApi } from '../../api/gradesApi.ts'
import { groupsApi } from '../../api/groupsApi.ts'
import { studentsApi } from '../../api/studentsApi.ts'
import { teachersApi } from '../../api/teachersApi.ts'
import { parentsApi } from '../../api/parentsApi.ts'

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
