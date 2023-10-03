import express from "express"
import HomeController from "../controllers/HomeController"
import AboutController from "../controllers/AboutController"
import { handleLogin, handleLogout, createUser, insertUser, getAllUser, login, editUser, updateUser, deleteUser, detailUser } from "../controllers/UserController"

const router = express.Router()

const initWebRoute = (app) => {
    router.get('/', HomeController)

    router.get('/about', AboutController)

    router.get('/create-new-user', createUser)

    router.post('/insert-user', insertUser)

    router.get('/list-user', getAllUser)

    router.get('/detail-user/:username', detailUser)

    router.get('/edit-user/:username', editUser)

    router.post('/update-user/', updateUser)

    router.post('/del-user/', deleteUser)

    router.get('/login', login)

    router.post('/login', handleLogin)

    router.get('/logout', handleLogout)

    router.get('/:slug', (req, res) => {
        res.send('Lỗi 404, không tìm thấy trang')
    })


    return app.use('/', router)

}

export default initWebRoute