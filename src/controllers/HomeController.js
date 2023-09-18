const HomeController = (req, res) => {
    return res.render("home", {
        data: {
            title: "Home page",
            page: 'main'
        }
    })
}
export default HomeController