const express = require("express"),
  articleCtrl = require("../controllers/article.ctrl"),
  router = express.Router();

/* 
@url
/article/
*/
router.get("/", articleCtrl.getAll);

/* 
@url
/article/create
*/
router.get("/create", articleCtrl.createForm);
router.post("/create", articleCtrl.createPost);

/* 
@url
/article/edit/:id
*/
router.get("/edit/:id", articleCtrl.editForm);
router.put("/edit/:id", articleCtrl.editPost);

/* 
@url
/article/delete/:id
*/
router.get("/delete/:id", articleCtrl.delete);
router.get("/delete/semua/all", articleCtrl.deleteAll);

module.exports = router;

/* RESTFUL API */
/* INDEX - SHOW ALL DATA */
/* CREATE - SHOW CREATE DATA */
/* CREATE POST - POST DATA */
/* EDIT - SHOW EDIT DATA */
/* EDIT PUT - PUT DATA */
/* DELETE - DELETE DATA */
