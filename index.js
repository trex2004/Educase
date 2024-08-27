import express from "express"
import dotenv from "dotenv"
import { addSchool } from "./routes/addSchool.js"
import { listSchools } from "./routes/listSchools.js"

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/listSchools", addSchool)

app.post("/addSchool", listSchools)

app.listen(PORT, () => console.log(`Running on Port : ${PORT}`))