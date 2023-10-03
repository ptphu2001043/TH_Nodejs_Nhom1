import dotenv from "dotenv"
import express from "express"
import configViewEngine from './configs/viewEngine'
import initWebRoute from "./route/webRoute"
import path from 'path'
import bodyParser from "body-parser"
import session from 'express-session'

const app = express()

dotenv.config()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

configViewEngine(app)

app.use(express.static(path.join(__dirname, 'public')))

initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})