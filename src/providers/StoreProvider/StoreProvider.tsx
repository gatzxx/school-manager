import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../../store/store/store.ts'
import { StateType } from '../../store/store/types.ts'

interface StoreProviderProps {
    children: ReactNode
    preloadedState?: StateType
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    preloadedState,
}) => {
    const store = createStore(preloadedState)

    return <Provider store={store}>{children}</Provider>
}
