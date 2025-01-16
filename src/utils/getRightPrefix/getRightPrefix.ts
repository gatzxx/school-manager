export const getRightSuffix = (grade: number) => {
    const lastDigit = grade % 10

    if (grade === 11) return '11th grade'

    switch (lastDigit) {
        case 1:
            return `${grade}st grade`
        case 2:
            return `${grade}nd grade`
        case 3:
            return `${grade}rd grade`
        default:
            return `${grade}th grade`
    }
}
