import { object, string, number } from 'yup'

export const latitudeValidation = object({
    latitude: number("Latitude is not a number").required("Latitude is required").min(-90, "Invalid Latitude").max(90, "Invalid Latitude")
})

export const longitudeValidation = object({
    longitude: number("Longitude is not a number").required("Longitude is required").min(-180, "Invalid Longitude").max(180, "Invalid Longitude")
})

export const SchoolValidation = object({
    name: string().required("Name is not provided").max(100, "Name is too long"),
    address: string().required("Address is not provided").max(250, "Address is too long"),
    latitude: number("Latitude is not a number").required("Latitude is required").min(-90, "Invalid Latitude").max(90, "Invalid Latitude"),
    longitude: number("Longitude is not a number").required("Longitude is required").min(-180, "Invalid Longitude").max(180, "Invalid Longitude")
})