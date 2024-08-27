import db from "../config/connectDB.js"
import { school } from "../model/dbSchema.js"
import { latitudeValidation, longitudeValidation } from "../validation/validation.js"


export const listSchools = async (req, res) => {
    try {
        let latitude = await latitudeValidation.validate({ latitude: Number(req.query.latitude) })
        let longitude = await longitudeValidation.validate({ longitude: Number(req.query.longitude) })
        latitude = latitude.latitude
        longitude = longitude.longitude
        const schools = await db.select().from(school)
        const sortedArray = schools.sort((first, second) => {
            const x = 3963.0 * Math.acos((Math.sin(latitude) * Math.sin(first.latitude)) + Math.cos(latitude) * Math.cos(first.latitude) * Math.cos(first.longitude - longitude))
            const y = 3963.0 * Math.acos((Math.sin(latitude) * Math.sin(second.latitude)) + Math.cos(latitude) * Math.cos(second.latitude) * Math.cos(second.longitude - longitude))
            if (x == y) {
                return 0
            }
            if (x < y) {
                return -1
            }
            return 1
        })
        return res.status(200).json({ success: true, schools: sortedArray })
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}