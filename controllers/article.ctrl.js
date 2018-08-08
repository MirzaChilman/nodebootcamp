const Article = require("../models/articles");
module.exports = {
  getAll: (req, res) => {
    Article.find({}, (err, data) => {
      if (err) throw err;
      return res.json(data);
    });
  },
  createForm: (req, res) => {
    return res.render("article/form", {
      data: null,
      url: req.baseUrl
    });
  },
  createPost: (req, res) => {
    const sudahJson = JSON.parse(req.body.dataKirim);
    Article.create(sudahJson, (err, data) => {
      if (err) throw err;
      return res.json(data);
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
    Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
      if (err) throw err;
      return res.json(data);
    });
  },
  delete: (req, res) => {
    Article.findByIdAndRemove(req.params.id, err => {
      if (err) throw err;
      return res.send(200);
    });
  },
  deleteAll: (req, res) => {
    Article.remove({}, err => {
      if (err) throw err;
      return res.send(200);
    });
  }
};
