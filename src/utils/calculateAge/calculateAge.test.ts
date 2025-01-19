import { calculateAge } from './calculateAge'

describe('calculateAge', () => {
    test('should correctly calculate age if the birthday has already passed', () => {
        const birthday = '1990-03-15'
        const today = new Date('2025-01-10')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(34)
    })

    test('should correctly calculate age if the birthday has not yet occurred', () => {
        const birthday = '1990-03-15'
        const today = new Date('2025-01-10')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(34)
    })

    test('should correctly calculate age if today is the birthday', () => {
        const birthday = '1990-01-10'
        const today = new Date('2025-01-10')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(35)
    })

    test('should correctly calculate age for a leap year birthday (February 29)', () => {
        const birthday = '2000-02-29'
        const today = new Date('2025-01-10')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(24)
    })

    test('should correctly calculate age for a leap year birthday on February 28 in a non-leap year', () => {
        const birthday = '2000-02-29'
        const today = new Date('2025-03-01')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(25)
    })

    test('should handle Date objects as input', () => {
        const birthday = new Date('1990-03-15')
        const today = new Date('2025-01-10')
        jest.useFakeTimers().setSystemTime(today)

        expect(calculateAge(birthday)).toBe(34)
    })

    test('should handle invalid date strings by returning NaN', () => {
        const invalidBirthday = 'invalid-date'
        expect(calculateAge(invalidBirthday)).toBeNaN()
    })
})
