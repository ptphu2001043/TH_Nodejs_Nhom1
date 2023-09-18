const CreateUser = (req, res) => {
    return res.render("home", {
        data: {
            title: "Tạo tài khoản",
            page: "newUser"
        }
    })
}

const ListUser = (req, res) => {
    return res.render("home", {
        data: {
            title: "Danh sách tài khoản",
            page: "listUser"
        }
    })
}

const Login = (req, res) => {
    return res.render("home", {
        data: {
            title: "Đăng nhập",
            page: "login"
        }
    })
}

const detailUser = (req, res) => {
    return res.render('home', {
        data: {
            title: "Chi tiết người dùng",
            page: "detailUser",
            params: req.params.username
        }
    })
}

export { CreateUser, ListUser, Login, detailUser }