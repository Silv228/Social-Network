export const required = (value) => !!value || "REQUIRED FIELD"
export const validEmail = (value) => !!(/^[A-Z\d.-]+@[A-Z\d]+(\.[A-Z]{2,})$/i).test(value) || "INVALID EMAIL"

