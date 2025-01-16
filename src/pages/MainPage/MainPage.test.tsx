import { render, screen } from '@testing-library/react'
import { useTranslation } from 'react-i18next'
import MainPage from "./MainPage.tsx";

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}))

const mockUseTranslation = useTranslation as jest.Mock

describe('MainPage', () => {
    test('renders the correct text from i18n', () => {

        mockUseTranslation.mockReturnValue({
            t: (key: string) => {
                if (key === 'MAIN') return 'ГЛАВНАЯ'
                return key
            },
        })

        render(<MainPage />)

        expect(screen.getByText('ГЛАВНАЯ')).toBeInTheDocument()
    })
})
