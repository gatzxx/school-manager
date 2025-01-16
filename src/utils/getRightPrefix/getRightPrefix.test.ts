import { getRightSuffix } from './getRightPrefix.ts'

describe('getRightSuffix', () => {
    test('should return "1st grade" for grade 1', () => {
        expect(getRightSuffix(1)).toBe('1st grade')
    })

    test('should return "2nd grade" for grade 2', () => {
        expect(getRightSuffix(2)).toBe('2nd grade')
    })

    test('should return "3rd grade" for grade 3', () => {
        expect(getRightSuffix(3)).toBe('3rd grade')
    })

    test('should return "4th grade" for grade 4', () => {
        expect(getRightSuffix(4)).toBe('4th grade')
    })

    test('should return "11th grade" for grade 11', () => {
        expect(getRightSuffix(11)).toBe('11th grade')
    })
})
