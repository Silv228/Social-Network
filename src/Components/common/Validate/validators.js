export const required = (value) => {
    if (!value) return "REQUIRED FIELD"
    return undefined
}
export const validEmail = (value) => {
    if ((/^[A-Z\d.-]+@[A-Z\d]+(\.[A-Z]{2,})$/i).test(value)) return undefined
    return "INVALID EMAIL"
}
