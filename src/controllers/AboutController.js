var session = require('express-session')

const AboutController = (req, res) => {
    let userdata = req.session.user

    return res.render("layout/main", {
        data: {
            title: "About website",
            content: "admin@abc.com.vn",
            page: "about",
            userdata
        }
    })
}
export default AboutController