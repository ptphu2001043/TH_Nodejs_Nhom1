import express from "express"
import HomeController from "../controllers/HomeController"
import AboutController from "../controllers/AboutController"
import { CreateUser, ListUser, Login, detailUser } from "../controllers/UserController"

const router = express.Router()

const initWebRoute = (app) => {
    router.get('/', HomeController)

    router.get('/about', AboutController)

    router.get('/create-new-user', CreateUser)

    router.get('/list-user', ListUser)

    router.get('/login', Login)

    router.get('/detail-user', detailUser)

    router.get('/:slug', (req, res) => {
        res.send('Lỗi 404, không tìm thấy trang')
    })

    return app.use('/', router)

}

export default initWebRoute