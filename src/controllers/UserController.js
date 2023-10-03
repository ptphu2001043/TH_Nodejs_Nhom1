import express from "express"
import userModel from "../services/userModel"
var session = require('express-session')

const handleLogin = async (req, res) => {
    let { username, password } = req.body
    let users = await userModel.compareUserPassword(username, password)
    if (users.length == 1) {
        req.session.user = username
        res.redirect('/')
    } else {
        return res.render("layout/main", {
            data: {
                title: "Đăng nhập",
                page: "login",
                message: "Tài khoản hoặc mật khẩu sai, vui lòng thử lại!"
            }
        })
    }
}

const handleLogout = (req, res) => {
    req.session.destroy(function (err) {
        // cannot access session here
        res.redirect('/')
    })
}

const getAllUser = async (req, res) => {
    let userdata = req.session.user

    let userList = await userModel.getAllUser()
    res.render("layout/main", {
        data: {
            title: "Danh sách tài khoản",
            page: "User/listUser",
            rows: userList,
            userdata
        }
    })
}

const createUser = (req, res) => {
    let userdata = req.session.user

    return res.render("layout/main", {
        data: {
            title: "Tạo tài khoản",
            page: "User/newUser",
            userdata
        }
    })
}

const detailUser = async (req, res) => {
    let userdata = req.session.user

    const username = req.params.username
    let dataUser = await userModel.detailUser(username)
    return res.render('layout/main', {
        data: {
            title: "Chi tiết người dùng",
            page: "User/detailUser",
            row: dataUser,
            dataUser
        }
    })
}

const insertUser = async (req, res) => {
    let { username, password, fullname, address, sex, email, id_group } = req.body
    await userModel.insertUser(username, password, fullname, address, sex, email, id_group)
    res.redirect('/list-user')
}

const editUser = async (req, res) => {
    let username = req.params.username
    let dataUser = await userModel.detailUser(username)
    res.render('layout/main', {
        data: {
            title: "Chỉnh sửa người dùng",
            page: "User/editUser",
            row: dataUser
        }
    })
}

const updateUser = async (req, res) => {
    let { id_user, username, password, fullname, address, sex, email, id_group } = req.body

    await userModel.updateUser(id_user, username, password, fullname, address, sex, email, id_group)
    res.redirect('/list-user')
}

const deleteUser = async (req, res) => {
    let { username } = req.body

    await userModel.deleteUser(username)
    res.redirect('list-user')
}

const login = (req, res) => {
    return res.render("layout/main", {
        data: {
            title: "Đăng nhập",
            page: "login"
        }
    })
}

export { handleLogin, handleLogout, createUser, insertUser, getAllUser, editUser, updateUser, deleteUser, login, detailUser }