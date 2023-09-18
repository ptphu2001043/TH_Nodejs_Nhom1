const AboutController = (req, res) => {
    return res.render("home", {
        data: {
            title: "About website",
            content: "admin@abc.com.vn",
            page: "about"
        }
    })
}
export default AboutController