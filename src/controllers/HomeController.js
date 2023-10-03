import express from "express"
import userModel from "../services/userModel"
var session = require('express-session')

const HomeController = async (req, res) => {
    let userList = await userModel.getAllUser()

    let userdata = req.session.user

    return res.render("layout/main", {
        data: {
            title: "Home page",
            page: 'home',
            rows: userList,
            userdata
        }
    })

}

export default HomeController