import db from "../config/connectDB.js"
import { school } from "../model/dbSchema.js"
import { SchoolValidation } from "../validation/validation.js"

export const addSchool = async (req, res) => {
    try {
        const data = await SchoolValidation.validate(req.body)
        const newSchool = await db.insert(school).values(data).$returningId()
        res.status(200).json({ success: true, ...newSchool[0] })
    }
    catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}