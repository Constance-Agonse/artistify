const express = require("express");
const router = express.Router();
const artistModel = require('./../model/Artists');

/* GET artist page  */
router.get("/", (req, res) => {

    artistModel.find()
        .then((artist) => res.render("dashboard/artists.hbs", {artist}))
        .catch((err) => {console.error(err)})
});



router.get("/create", (req, res)=>{
    res.render("dashboard/artistCreate.hbs")
})



router.post('/', async function (req, res, next) {
    if (req.body.isBand === 'on') {req.body.isBand = true}
    else {req.body.isBand = false};
    try {
      await artistModel.create(
        req.body
      );
      res.redirect("/dashboard/artist");
    } catch (err) {
      next(err);
    }
  });


  router.get("/update/:id([a-z0-9]{24})", async function(req, res, next){
    if (req.body.isBand === 'on') {req.body.isBand = true}
    else {req.body.isBand = false};
    try{
        res.render("dashboard/artistUpdate.hbs", { 
            artist : await artistModel.findById(req.params.id),
        })
    } catch(err) {
          next(err)
      }
  })

  router.post("/update/:id([a-z0-9]{24})", async function (req, res, next) {
    if (req.body.isBand === 'on') {req.body.isBand = true}
    else {req.body.isBand = false};
    try {
      await artistModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/dashboard/artist");
    } catch (err) {
      next(err);
    }
  });


router.get("/delete/:id([a-z0-9]{24})", (req, res, next) => {
  artistModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/dashboard/artist"))
    .catch(next);
});






module.exports = router;
