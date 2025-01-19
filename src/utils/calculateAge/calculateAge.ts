export const calculateAge = (birthday: string | Date) => {
    const birthDate = new Date(birthday)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()

    return today <
        new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? age - 1
        : age
}
