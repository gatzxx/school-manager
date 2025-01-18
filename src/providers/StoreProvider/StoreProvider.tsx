import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../../store/store/store.ts'
import { StateSchema } from '../../store/types/types.ts'

interface StoreProviderProps {
    children: ReactNode
    preloadedState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    preloadedState,
}) => {
    const store = createStore(preloadedState)

    return <Provider store={store}>{children}</Provider>
}
