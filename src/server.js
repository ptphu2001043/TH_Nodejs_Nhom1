const path = require('path');
import dotenv from "dotenv"
import express from "express"
import configViewEngine from './configs/viewEngine'
import initWebRoute from "./route/webRoute"

const app = express()

dotenv.config()
const port = process.env.PORT

configViewEngine(app)

app.use(express.static(path.join(__dirname, 'public')))

initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})