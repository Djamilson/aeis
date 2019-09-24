class HomeController {
  async index (req, res) {
    return res.render('index')
  }
}

module.exports = new HomeController()
