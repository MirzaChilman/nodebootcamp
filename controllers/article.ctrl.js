const Article = require("../models/articles");
module.exports = {
  getAll: (req, res) => {
    Article.find({}, (err, data) => {
      if (err) throw err;
      return res.render("article/dashboard-article", { data });
    });
  },
  createForm: (req, res) => {
    return res.render("article/form", {
      data: null,
      url: req.baseUrl
    });
  },
  createPost: (req, res) => {
    Article.create(req.body, (err, _) => {
      if (err) throw err;
      return res.redirect("/article");
    });
  },
  editForm: (req, res) => {
    Article.findById(req.params.id, (err, data) => {
      if (err) throw err;
      return res.render("article/form", {
        data,
        url: req.baseUrl
      });
    });
  },
  editPost: (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, (err, _) => {
      if (err) throw err;
      return res.redirect("/article");
    });
  },
  delete: (req, res) => {
    Article.findByIdAndRemove(req.params.id, err => {
      if (err) throw err;
      return res.redirect("/article");
    });
  }
};
